// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTUpdateAvailabilityOptionsActionEnum
type POSTUpdateAvailabilityOptionsActionEnum string

const (
	POSTUpdateAvailabilityOptionsActionEnumUpdateAvailabilityOptions POSTUpdateAvailabilityOptionsActionEnum = "UpdateAvailabilityOptions"
)

func (e POSTUpdateAvailabilityOptionsActionEnum) ToPointer() *POSTUpdateAvailabilityOptionsActionEnum {
	return &e
}

func (e *POSTUpdateAvailabilityOptionsActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "UpdateAvailabilityOptions":
		*e = POSTUpdateAvailabilityOptionsActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTUpdateAvailabilityOptionsActionEnum: %v", v)
	}
}

// POSTUpdateAvailabilityOptionsVersionEnum
type POSTUpdateAvailabilityOptionsVersionEnum string

const (
	POSTUpdateAvailabilityOptionsVersionEnumTwoThousandAndThirteen0101 POSTUpdateAvailabilityOptionsVersionEnum = "2013-01-01"
)

func (e POSTUpdateAvailabilityOptionsVersionEnum) ToPointer() *POSTUpdateAvailabilityOptionsVersionEnum {
	return &e
}

func (e *POSTUpdateAvailabilityOptionsVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2013-01-01":
		*e = POSTUpdateAvailabilityOptionsVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTUpdateAvailabilityOptionsVersionEnum: %v", v)
	}
}

type POSTUpdateAvailabilityOptionsRequest struct {
	Action            POSTUpdateAvailabilityOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                   `request:"mediaType=text/xml"`
	Version           POSTUpdateAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTUpdateAvailabilityOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
