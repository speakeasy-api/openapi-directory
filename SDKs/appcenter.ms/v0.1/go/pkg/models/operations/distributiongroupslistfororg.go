// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type DistributionGroupsListForOrgSecurity struct {
	APIToken string `security:"scheme,type=apiKey,subtype=header,name=X-API-Token"`
}

type DistributionGroupsListForOrgRequest struct {
	// The organization's name
	OrgName string `pathParam:"style=simple,explode=false,name=org_name"`
}

type DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum string

const (
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumBadRequest          DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "BadRequest"
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumConflict            DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "Conflict"
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumNotAcceptable       DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "NotAcceptable"
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumNotFound            DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "NotFound"
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumInternalServerError DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "InternalServerError"
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumUnauthorized        DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "Unauthorized"
	DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnumTooManyRequests     DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum = "TooManyRequests"
)

func (e DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum) ToPointer() *DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum {
	return &e
}

func (e *DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "BadRequest":
		fallthrough
	case "Conflict":
		fallthrough
	case "NotAcceptable":
		fallthrough
	case "NotFound":
		fallthrough
	case "InternalServerError":
		fallthrough
	case "Unauthorized":
		fallthrough
	case "TooManyRequests":
		*e = DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum: %v", v)
	}
}

type DistributionGroupsListForOrgDefaultApplicationJSONError struct {
	Code    DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum `json:"code"`
	Message string                                                          `json:"message"`
}

// DistributionGroupsListForOrgDefaultApplicationJSON - Error
type DistributionGroupsListForOrgDefaultApplicationJSON struct {
	Error DistributionGroupsListForOrgDefaultApplicationJSONError `json:"error"`
}

// DistributionGroupsListForOrg201ApplicationJSONOriginEnum - The creation origin of this distribution group
type DistributionGroupsListForOrg201ApplicationJSONOriginEnum string

const (
	DistributionGroupsListForOrg201ApplicationJSONOriginEnumAppcenter DistributionGroupsListForOrg201ApplicationJSONOriginEnum = "appcenter"
	DistributionGroupsListForOrg201ApplicationJSONOriginEnumHockeyapp DistributionGroupsListForOrg201ApplicationJSONOriginEnum = "hockeyapp"
)

func (e DistributionGroupsListForOrg201ApplicationJSONOriginEnum) ToPointer() *DistributionGroupsListForOrg201ApplicationJSONOriginEnum {
	return &e
}

func (e *DistributionGroupsListForOrg201ApplicationJSONOriginEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "appcenter":
		fallthrough
	case "hockeyapp":
		*e = DistributionGroupsListForOrg201ApplicationJSONOriginEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DistributionGroupsListForOrg201ApplicationJSONOriginEnum: %v", v)
	}
}

type DistributionGroupsListForOrg201ApplicationJSON struct {
	// The name of the distribution group
	DisplayName *string `json:"display_name,omitempty"`
	// The unique ID of the distribution group
	ID string `json:"id"`
	// Whether the distribution group is public
	IsPublic bool `json:"is_public"`
	// The name of the distribution group used in URLs
	Name string `json:"name"`
	// The creation origin of this distribution group
	Origin DistributionGroupsListForOrg201ApplicationJSONOriginEnum `json:"origin"`
}

type DistributionGroupsListForOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Success
	DistributionGroupsListForOrg201ApplicationJSONObjects []DistributionGroupsListForOrg201ApplicationJSON
	// Error
	DistributionGroupsListForOrgDefaultApplicationJSONObject *DistributionGroupsListForOrgDefaultApplicationJSON
}
