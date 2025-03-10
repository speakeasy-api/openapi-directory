// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTSendBulkTemplatedEmailActionEnum
type POSTSendBulkTemplatedEmailActionEnum string

const (
	POSTSendBulkTemplatedEmailActionEnumSendBulkTemplatedEmail POSTSendBulkTemplatedEmailActionEnum = "SendBulkTemplatedEmail"
)

func (e POSTSendBulkTemplatedEmailActionEnum) ToPointer() *POSTSendBulkTemplatedEmailActionEnum {
	return &e
}

func (e *POSTSendBulkTemplatedEmailActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SendBulkTemplatedEmail":
		*e = POSTSendBulkTemplatedEmailActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTSendBulkTemplatedEmailActionEnum: %v", v)
	}
}

// POSTSendBulkTemplatedEmailVersionEnum
type POSTSendBulkTemplatedEmailVersionEnum string

const (
	POSTSendBulkTemplatedEmailVersionEnumTwoThousandAndTen1201 POSTSendBulkTemplatedEmailVersionEnum = "2010-12-01"
)

func (e POSTSendBulkTemplatedEmailVersionEnum) ToPointer() *POSTSendBulkTemplatedEmailVersionEnum {
	return &e
}

func (e *POSTSendBulkTemplatedEmailVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-12-01":
		*e = POSTSendBulkTemplatedEmailVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTSendBulkTemplatedEmailVersionEnum: %v", v)
	}
}

type POSTSendBulkTemplatedEmailRequest struct {
	Action            POSTSendBulkTemplatedEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                `request:"mediaType=text/xml"`
	Version           POSTSendBulkTemplatedEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTSendBulkTemplatedEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
