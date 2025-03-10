// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDisassociateRouteTableActionEnum
type POSTDisassociateRouteTableActionEnum string

const (
	POSTDisassociateRouteTableActionEnumDisassociateRouteTable POSTDisassociateRouteTableActionEnum = "DisassociateRouteTable"
)

func (e POSTDisassociateRouteTableActionEnum) ToPointer() *POSTDisassociateRouteTableActionEnum {
	return &e
}

func (e *POSTDisassociateRouteTableActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DisassociateRouteTable":
		*e = POSTDisassociateRouteTableActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDisassociateRouteTableActionEnum: %v", v)
	}
}

// POSTDisassociateRouteTableVersionEnum
type POSTDisassociateRouteTableVersionEnum string

const (
	POSTDisassociateRouteTableVersionEnumTwoThousandAndSixteen1115 POSTDisassociateRouteTableVersionEnum = "2016-11-15"
)

func (e POSTDisassociateRouteTableVersionEnum) ToPointer() *POSTDisassociateRouteTableVersionEnum {
	return &e
}

func (e *POSTDisassociateRouteTableVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = POSTDisassociateRouteTableVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDisassociateRouteTableVersionEnum: %v", v)
	}
}

type POSTDisassociateRouteTableRequest struct {
	Action            POSTDisassociateRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                `request:"mediaType=text/xml"`
	Version           POSTDisassociateRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDisassociateRouteTableResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
