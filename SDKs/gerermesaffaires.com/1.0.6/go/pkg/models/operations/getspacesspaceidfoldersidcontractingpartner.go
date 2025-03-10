// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type GetSpacesSpaceIDFoldersIDContractingPartnerRequest struct {
	// Id of the folder (contract)
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// Id of the space
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
}

type GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum string

const (
	GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnumCompanyEntity GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum = "CompanyEntity"
	GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnumPerson        GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum = "Person"
)

func (e GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum) ToPointer() *GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum {
	return &e
}

func (e *GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CompanyEntity":
		fallthrough
	case "Person":
		*e = GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum: %v", v)
	}
}

type GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSON struct {
	Class *GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONClassEnum `json:"Class,omitempty"`
	ID    *string                                                                 `json:"Id,omitempty"`
	Role  *string                                                                 `json:"Role,omitempty"`
}

type GetSpacesSpaceIDFoldersIDContractingPartnerResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// A list of contracting partners
	GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSONObjects []GetSpacesSpaceIDFoldersIDContractingPartner200ApplicationJSON
}
