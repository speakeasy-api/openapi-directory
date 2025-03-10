// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTListExportsActionEnum
type POSTListExportsActionEnum string

const (
	POSTListExportsActionEnumListExports POSTListExportsActionEnum = "ListExports"
)

func (e POSTListExportsActionEnum) ToPointer() *POSTListExportsActionEnum {
	return &e
}

func (e *POSTListExportsActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ListExports":
		*e = POSTListExportsActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTListExportsActionEnum: %v", v)
	}
}

// POSTListExportsVersionEnum
type POSTListExportsVersionEnum string

const (
	POSTListExportsVersionEnumTwoThousandAndTen0515 POSTListExportsVersionEnum = "2010-05-15"
)

func (e POSTListExportsVersionEnum) ToPointer() *POSTListExportsVersionEnum {
	return &e
}

func (e *POSTListExportsVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-05-15":
		*e = POSTListExportsVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTListExportsVersionEnum: %v", v)
	}
}

type POSTListExportsRequest struct {
	Action POSTListExportsActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Pagination token
	NextToken         *string                    `queryParam:"style=form,explode=true,name=NextToken"`
	RequestBody       []byte                     `request:"mediaType=text/xml"`
	Version           POSTListExportsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTListExportsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
