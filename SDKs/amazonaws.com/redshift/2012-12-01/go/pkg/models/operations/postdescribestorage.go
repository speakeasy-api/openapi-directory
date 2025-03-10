// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDescribeStorageActionEnum
type POSTDescribeStorageActionEnum string

const (
	POSTDescribeStorageActionEnumDescribeStorage POSTDescribeStorageActionEnum = "DescribeStorage"
)

func (e POSTDescribeStorageActionEnum) ToPointer() *POSTDescribeStorageActionEnum {
	return &e
}

func (e *POSTDescribeStorageActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DescribeStorage":
		*e = POSTDescribeStorageActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeStorageActionEnum: %v", v)
	}
}

// POSTDescribeStorageVersionEnum
type POSTDescribeStorageVersionEnum string

const (
	POSTDescribeStorageVersionEnumTwoThousandAndTwelve1201 POSTDescribeStorageVersionEnum = "2012-12-01"
)

func (e POSTDescribeStorageVersionEnum) ToPointer() *POSTDescribeStorageVersionEnum {
	return &e
}

func (e *POSTDescribeStorageVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2012-12-01":
		*e = POSTDescribeStorageVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeStorageVersionEnum: %v", v)
	}
}

type POSTDescribeStorageRequest struct {
	Action            POSTDescribeStorageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version           POSTDescribeStorageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDescribeStorageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
