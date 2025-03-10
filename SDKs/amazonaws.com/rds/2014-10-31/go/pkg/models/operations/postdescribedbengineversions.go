// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDescribeDBEngineVersionsActionEnum
type POSTDescribeDBEngineVersionsActionEnum string

const (
	POSTDescribeDBEngineVersionsActionEnumDescribeDbEngineVersions POSTDescribeDBEngineVersionsActionEnum = "DescribeDBEngineVersions"
)

func (e POSTDescribeDBEngineVersionsActionEnum) ToPointer() *POSTDescribeDBEngineVersionsActionEnum {
	return &e
}

func (e *POSTDescribeDBEngineVersionsActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DescribeDBEngineVersions":
		*e = POSTDescribeDBEngineVersionsActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeDBEngineVersionsActionEnum: %v", v)
	}
}

// POSTDescribeDBEngineVersionsVersionEnum
type POSTDescribeDBEngineVersionsVersionEnum string

const (
	POSTDescribeDBEngineVersionsVersionEnumTwoThousandAndFourteen1031 POSTDescribeDBEngineVersionsVersionEnum = "2014-10-31"
)

func (e POSTDescribeDBEngineVersionsVersionEnum) ToPointer() *POSTDescribeDBEngineVersionsVersionEnum {
	return &e
}

func (e *POSTDescribeDBEngineVersionsVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-10-31":
		*e = POSTDescribeDBEngineVersionsVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeDBEngineVersionsVersionEnum: %v", v)
	}
}

type POSTDescribeDBEngineVersionsRequest struct {
	Action POSTDescribeDBEngineVersionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Pagination token
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
	// Pagination limit
	MaxRecords        *string                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	RequestBody       []byte                                  `request:"mediaType=text/xml"`
	Version           POSTDescribeDBEngineVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDescribeDBEngineVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
