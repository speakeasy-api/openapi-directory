// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// LegalEntityTypeEnum - The type of legal entity.
//
//	Possible values: **individual** or **organization**
type LegalEntityTypeEnum string

const (
	LegalEntityTypeEnumIndividual   LegalEntityTypeEnum = "individual"
	LegalEntityTypeEnumOrganization LegalEntityTypeEnum = "organization"
)

func (e LegalEntityTypeEnum) ToPointer() *LegalEntityTypeEnum {
	return &e
}

func (e *LegalEntityTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "individual":
		fallthrough
	case "organization":
		*e = LegalEntityTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for LegalEntityTypeEnum: %v", v)
	}
}

// LegalEntity - OK - the request has succeeded.
type LegalEntity struct {
	// Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
	Capabilities map[string]LegalEntityCapability `json:"capabilities,omitempty"`
	// List of documents uploaded for the legal entity.
	Documents []EntityReference `json:"documents,omitempty"`
	// List of legal entities associated with the current legal entity.
	// For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
	EntityAssociations []LegalEntityAssociation `json:"entityAssociations,omitempty"`
	// The unique identifier of the legal entity.
	ID           string        `json:"id"`
	Individual   *Individual   `json:"individual,omitempty"`
	Organization *Organization `json:"organization,omitempty"`
	// Your reference for the legal entity, maximum 150 characters.
	Reference *string `json:"reference,omitempty"`
	// List of transfer instruments that the legal entity owns.
	TransferInstruments []TransferInstrumentReference `json:"transferInstruments,omitempty"`
	// The type of legal entity.
	//
	//  Possible values: **individual** or **organization**
	Type *LegalEntityTypeEnum `json:"type,omitempty"`
}
