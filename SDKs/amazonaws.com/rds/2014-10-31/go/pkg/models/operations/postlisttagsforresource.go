// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTListTagsForResourceActionEnum
type POSTListTagsForResourceActionEnum string

const (
	POSTListTagsForResourceActionEnumListTagsForResource POSTListTagsForResourceActionEnum = "ListTagsForResource"
)

func (e POSTListTagsForResourceActionEnum) ToPointer() *POSTListTagsForResourceActionEnum {
	return &e
}

func (e *POSTListTagsForResourceActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ListTagsForResource":
		*e = POSTListTagsForResourceActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTListTagsForResourceActionEnum: %v", v)
	}
}

// POSTListTagsForResourceVersionEnum
type POSTListTagsForResourceVersionEnum string

const (
	POSTListTagsForResourceVersionEnumTwoThousandAndFourteen1031 POSTListTagsForResourceVersionEnum = "2014-10-31"
)

func (e POSTListTagsForResourceVersionEnum) ToPointer() *POSTListTagsForResourceVersionEnum {
	return &e
}

func (e *POSTListTagsForResourceVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-10-31":
		*e = POSTListTagsForResourceVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTListTagsForResourceVersionEnum: %v", v)
	}
}

type POSTListTagsForResourceRequest struct {
	Action            POSTListTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                             `request:"mediaType=text/xml"`
	Version           POSTListTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTListTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
