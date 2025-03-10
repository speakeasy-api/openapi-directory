// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDescribeTagsActionEnum
type POSTDescribeTagsActionEnum string

const (
	POSTDescribeTagsActionEnumDescribeTags POSTDescribeTagsActionEnum = "DescribeTags"
)

func (e POSTDescribeTagsActionEnum) ToPointer() *POSTDescribeTagsActionEnum {
	return &e
}

func (e *POSTDescribeTagsActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DescribeTags":
		*e = POSTDescribeTagsActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeTagsActionEnum: %v", v)
	}
}

// POSTDescribeTagsVersionEnum
type POSTDescribeTagsVersionEnum string

const (
	POSTDescribeTagsVersionEnumTwoThousandAndTwelve0601 POSTDescribeTagsVersionEnum = "2012-06-01"
)

func (e POSTDescribeTagsVersionEnum) ToPointer() *POSTDescribeTagsVersionEnum {
	return &e
}

func (e *POSTDescribeTagsVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2012-06-01":
		*e = POSTDescribeTagsVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeTagsVersionEnum: %v", v)
	}
}

type POSTDescribeTagsRequest struct {
	Action            POSTDescribeTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                      `request:"mediaType=text/xml"`
	Version           POSTDescribeTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDescribeTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
