// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type GetBusinessGroupsIDSpacesSecurity struct {
	GmaAuth string `security:"scheme,type=oauth2,name=Authorization"`
}

// GetBusinessGroupsIDSpacesTypeEnum - Type of the space
type GetBusinessGroupsIDSpacesTypeEnum string

const (
	GetBusinessGroupsIDSpacesTypeEnumPrivate     GetBusinessGroupsIDSpacesTypeEnum = "private"
	GetBusinessGroupsIDSpacesTypeEnumEnterprise  GetBusinessGroupsIDSpacesTypeEnum = "enterprise"
	GetBusinessGroupsIDSpacesTypeEnumCompany     GetBusinessGroupsIDSpacesTypeEnum = "company"
	GetBusinessGroupsIDSpacesTypeEnumAssociation GetBusinessGroupsIDSpacesTypeEnum = "association"
)

func (e GetBusinessGroupsIDSpacesTypeEnum) ToPointer() *GetBusinessGroupsIDSpacesTypeEnum {
	return &e
}

func (e *GetBusinessGroupsIDSpacesTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "private":
		fallthrough
	case "enterprise":
		fallthrough
	case "company":
		fallthrough
	case "association":
		*e = GetBusinessGroupsIDSpacesTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetBusinessGroupsIDSpacesTypeEnum: %v", v)
	}
}

type GetBusinessGroupsIDSpacesRequest struct {
	// Name of the space
	Name *string `queryParam:"style=form,explode=true,name=Name"`
	// registration number of the space
	RegistrationNumber *string `queryParam:"style=form,explode=true,name=RegistrationNumber"`
	// Type of the space
	Type *GetBusinessGroupsIDSpacesTypeEnum `queryParam:"style=form,explode=true,name=Type"`
	// Id of the group
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum string

const (
	GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnumPrivate     GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum = "private"
	GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnumEnterprise  GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum = "enterprise"
	GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnumCompany     GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum = "company"
	GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnumAssociation GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum = "association"
)

func (e GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum) ToPointer() *GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum {
	return &e
}

func (e *GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "private":
		fallthrough
	case "enterprise":
		fallthrough
	case "company":
		fallthrough
	case "association":
		*e = GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum: %v", v)
	}
}

type GetBusinessGroupsIDSpaces200ApplicationJSON struct {
	ID                 *string                                              `json:"Id,omitempty"`
	ModificationDate   *string                                              `json:"ModificationDate,omitempty"`
	Name               *string                                              `json:"Name,omitempty"`
	RegistrationNumber *string                                              `json:"RegistrationNumber,omitempty"`
	Type               *GetBusinessGroupsIDSpaces200ApplicationJSONTypeEnum `json:"Type,omitempty"`
}

type GetBusinessGroupsIDSpacesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// A list of Spaces
	GetBusinessGroupsIDSpaces200ApplicationJSONObjects []GetBusinessGroupsIDSpaces200ApplicationJSON
}
