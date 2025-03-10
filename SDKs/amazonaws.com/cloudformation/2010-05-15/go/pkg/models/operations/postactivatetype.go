// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTActivateTypeActionEnum
type POSTActivateTypeActionEnum string

const (
	POSTActivateTypeActionEnumActivateType POSTActivateTypeActionEnum = "ActivateType"
)

func (e POSTActivateTypeActionEnum) ToPointer() *POSTActivateTypeActionEnum {
	return &e
}

func (e *POSTActivateTypeActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ActivateType":
		*e = POSTActivateTypeActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTActivateTypeActionEnum: %v", v)
	}
}

// POSTActivateTypeVersionEnum
type POSTActivateTypeVersionEnum string

const (
	POSTActivateTypeVersionEnumTwoThousandAndTen0515 POSTActivateTypeVersionEnum = "2010-05-15"
)

func (e POSTActivateTypeVersionEnum) ToPointer() *POSTActivateTypeVersionEnum {
	return &e
}

func (e *POSTActivateTypeVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-05-15":
		*e = POSTActivateTypeVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTActivateTypeVersionEnum: %v", v)
	}
}

type POSTActivateTypeRequest struct {
	Action            POSTActivateTypeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                      `request:"mediaType=text/xml"`
	Version           POSTActivateTypeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTActivateTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
