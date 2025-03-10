// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"time"
)

type ScimUserEmails struct {
	Primary *bool   `json:"primary,omitempty"`
	Type    *string `json:"type,omitempty"`
	Value   string  `json:"value"`
}

type ScimUserGroups struct {
	Display *string `json:"display,omitempty"`
	Value   *string `json:"value,omitempty"`
}

type ScimUserMeta struct {
	Created      *time.Time `json:"created,omitempty"`
	LastModified *time.Time `json:"lastModified,omitempty"`
	Location     *string    `json:"location,omitempty"`
	ResourceType *string    `json:"resourceType,omitempty"`
}

type ScimUserName struct {
	FamilyName *string `json:"familyName,omitempty"`
	Formatted  *string `json:"formatted,omitempty"`
	GivenName  *string `json:"givenName,omitempty"`
}

type ScimUserOperationsOpEnum string

const (
	ScimUserOperationsOpEnumAdd     ScimUserOperationsOpEnum = "add"
	ScimUserOperationsOpEnumRemove  ScimUserOperationsOpEnum = "remove"
	ScimUserOperationsOpEnumReplace ScimUserOperationsOpEnum = "replace"
)

func (e ScimUserOperationsOpEnum) ToPointer() *ScimUserOperationsOpEnum {
	return &e
}

func (e *ScimUserOperationsOpEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "add":
		fallthrough
	case "remove":
		fallthrough
	case "replace":
		*e = ScimUserOperationsOpEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ScimUserOperationsOpEnum: %v", v)
	}
}

type ScimUserOperationsValueType string

const (
	ScimUserOperationsValueTypeStr        ScimUserOperationsValueType = "str"
	ScimUserOperationsValueTypeMapOfany   ScimUserOperationsValueType = "mapOfany"
	ScimUserOperationsValueTypeArrayOfany ScimUserOperationsValueType = "arrayOfany"
)

type ScimUserOperationsValue struct {
	Str        *string
	MapOfany   map[string]interface{}
	ArrayOfany []interface{}

	Type ScimUserOperationsValueType
}

func CreateScimUserOperationsValueStr(str string) ScimUserOperationsValue {
	typ := ScimUserOperationsValueTypeStr

	return ScimUserOperationsValue{
		Str:  &str,
		Type: typ,
	}
}

func CreateScimUserOperationsValueMapOfany(mapOfany map[string]interface{}) ScimUserOperationsValue {
	typ := ScimUserOperationsValueTypeMapOfany

	return ScimUserOperationsValue{
		MapOfany: mapOfany,
		Type:     typ,
	}
}

func CreateScimUserOperationsValueArrayOfany(arrayOfany []interface{}) ScimUserOperationsValue {
	typ := ScimUserOperationsValueTypeArrayOfany

	return ScimUserOperationsValue{
		ArrayOfany: arrayOfany,
		Type:       typ,
	}
}

func (u *ScimUserOperationsValue) UnmarshalJSON(data []byte) error {
	var d *json.Decoder

	str := new(string)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&str); err == nil {
		u.Str = str
		u.Type = ScimUserOperationsValueTypeStr
		return nil
	}

	mapOfany := map[string]interface{}{}
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&mapOfany); err == nil {
		u.MapOfany = mapOfany
		u.Type = ScimUserOperationsValueTypeMapOfany
		return nil
	}

	arrayOfany := []interface{}{}
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&arrayOfany); err == nil {
		u.ArrayOfany = arrayOfany
		u.Type = ScimUserOperationsValueTypeArrayOfany
		return nil
	}

	return errors.New("could not unmarshal into supported union types")
}

func (u ScimUserOperationsValue) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return json.Marshal(u.Str)
	}

	if u.MapOfany != nil {
		return json.Marshal(u.MapOfany)
	}

	if u.ArrayOfany != nil {
		return json.Marshal(u.ArrayOfany)
	}

	return nil, nil
}

type ScimUserOperations struct {
	Op    ScimUserOperationsOpEnum `json:"op"`
	Path  *string                  `json:"path,omitempty"`
	Value *ScimUserOperationsValue `json:"value,omitempty"`
}

type ScimUserRoles struct {
	Display *string `json:"display,omitempty"`
	Primary *bool   `json:"primary,omitempty"`
	Type    *string `json:"type,omitempty"`
	Value   *string `json:"value,omitempty"`
}

// ScimUser - SCIM /Users provisioning endpoints
type ScimUser struct {
	// The active status of the User.
	Active bool `json:"active"`
	// The name of the user, suitable for display to end-users
	DisplayName *string `json:"displayName,omitempty"`
	// user emails
	Emails []ScimUserEmails `json:"emails"`
	// The ID of the User.
	ExternalID *string `json:"externalId,omitempty"`
	// associated groups
	Groups []ScimUserGroups `json:"groups,omitempty"`
	// Unique identifier of an external identity
	ID   string        `json:"id"`
	Meta ScimUserMeta  `json:"meta"`
	Name *ScimUserName `json:"name,omitempty"`
	// Set of operations to be performed
	Operations []ScimUserOperations `json:"operations,omitempty"`
	// The ID of the organization.
	OrganizationID *int64          `json:"organization_id,omitempty"`
	Roles          []ScimUserRoles `json:"roles,omitempty"`
	// SCIM schema used.
	Schemas []string `json:"schemas"`
	// Configured by the admin. Could be an email, login, or username
	UserName *string `json:"userName,omitempty"`
}
