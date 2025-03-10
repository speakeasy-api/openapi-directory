// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// FormRelationshipsShareDataTypeEnum - Type is share.
type FormRelationshipsShareDataTypeEnum string

const (
	FormRelationshipsShareDataTypeEnumShare FormRelationshipsShareDataTypeEnum = "share"
)

func (e FormRelationshipsShareDataTypeEnum) ToPointer() *FormRelationshipsShareDataTypeEnum {
	return &e
}

func (e *FormRelationshipsShareDataTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "share":
		*e = FormRelationshipsShareDataTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FormRelationshipsShareDataTypeEnum: %v", v)
	}
}

type FormRelationshipsShareData struct {
	// ID of the share.
	ID *int64 `json:"id,omitempty"`
	// Type is share.
	Type *FormRelationshipsShareDataTypeEnum `json:"type,omitempty"`
}

type FormRelationshipsShare struct {
	Data *FormRelationshipsShareData `json:"data,omitempty"`
}

// FormRelationships - Share relationship data of the form.
type FormRelationships struct {
	Share *FormRelationshipsShare `json:"share,omitempty"`
}

// Form - Regular form object.
type Form struct {
	// Attributes of the form including it's included fields and css styles
	Attributes *FormAttributes `json:"attributes,omitempty"`
	// ID of the form.
	ID *int `json:"id,omitempty"`
	// Share relationship data of the form.
	Relationships *FormRelationships `json:"relationships,omitempty"`
	// Type is "form".
	Type *string `json:"type,omitempty"`
}
