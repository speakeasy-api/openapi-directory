// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTModifyNetworkInterfaceAttributeActionEnum
type POSTModifyNetworkInterfaceAttributeActionEnum string

const (
	POSTModifyNetworkInterfaceAttributeActionEnumModifyNetworkInterfaceAttribute POSTModifyNetworkInterfaceAttributeActionEnum = "ModifyNetworkInterfaceAttribute"
)

func (e POSTModifyNetworkInterfaceAttributeActionEnum) ToPointer() *POSTModifyNetworkInterfaceAttributeActionEnum {
	return &e
}

func (e *POSTModifyNetworkInterfaceAttributeActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ModifyNetworkInterfaceAttribute":
		*e = POSTModifyNetworkInterfaceAttributeActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTModifyNetworkInterfaceAttributeActionEnum: %v", v)
	}
}

// POSTModifyNetworkInterfaceAttributeVersionEnum
type POSTModifyNetworkInterfaceAttributeVersionEnum string

const (
	POSTModifyNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 POSTModifyNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)

func (e POSTModifyNetworkInterfaceAttributeVersionEnum) ToPointer() *POSTModifyNetworkInterfaceAttributeVersionEnum {
	return &e
}

func (e *POSTModifyNetworkInterfaceAttributeVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = POSTModifyNetworkInterfaceAttributeVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTModifyNetworkInterfaceAttributeVersionEnum: %v", v)
	}
}

type POSTModifyNetworkInterfaceAttributeRequest struct {
	Action            POSTModifyNetworkInterfaceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                         `request:"mediaType=text/xml"`
	Version           POSTModifyNetworkInterfaceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTModifyNetworkInterfaceAttributeResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
