// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTListUserPoliciesActionEnum
type POSTListUserPoliciesActionEnum string

const (
	POSTListUserPoliciesActionEnumListUserPolicies POSTListUserPoliciesActionEnum = "ListUserPolicies"
)

func (e POSTListUserPoliciesActionEnum) ToPointer() *POSTListUserPoliciesActionEnum {
	return &e
}

func (e *POSTListUserPoliciesActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ListUserPolicies":
		*e = POSTListUserPoliciesActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTListUserPoliciesActionEnum: %v", v)
	}
}

// POSTListUserPoliciesVersionEnum
type POSTListUserPoliciesVersionEnum string

const (
	POSTListUserPoliciesVersionEnumTwoThousandAndTen0508 POSTListUserPoliciesVersionEnum = "2010-05-08"
)

func (e POSTListUserPoliciesVersionEnum) ToPointer() *POSTListUserPoliciesVersionEnum {
	return &e
}

func (e *POSTListUserPoliciesVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-05-08":
		*e = POSTListUserPoliciesVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTListUserPoliciesVersionEnum: %v", v)
	}
}

type POSTListUserPoliciesRequest struct {
	Action POSTListUserPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Pagination token
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
	// Pagination limit
	MaxItems          *string                         `queryParam:"style=form,explode=true,name=MaxItems"`
	RequestBody       []byte                          `request:"mediaType=text/xml"`
	Version           POSTListUserPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTListUserPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
