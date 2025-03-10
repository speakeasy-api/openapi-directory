// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETDescribeInstanceRefreshesActionEnum
type GETDescribeInstanceRefreshesActionEnum string

const (
	GETDescribeInstanceRefreshesActionEnumDescribeInstanceRefreshes GETDescribeInstanceRefreshesActionEnum = "DescribeInstanceRefreshes"
)

func (e GETDescribeInstanceRefreshesActionEnum) ToPointer() *GETDescribeInstanceRefreshesActionEnum {
	return &e
}

func (e *GETDescribeInstanceRefreshesActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DescribeInstanceRefreshes":
		*e = GETDescribeInstanceRefreshesActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDescribeInstanceRefreshesActionEnum: %v", v)
	}
}

// GETDescribeInstanceRefreshesVersionEnum
type GETDescribeInstanceRefreshesVersionEnum string

const (
	GETDescribeInstanceRefreshesVersionEnumTwoThousandAndEleven0101 GETDescribeInstanceRefreshesVersionEnum = "2011-01-01"
)

func (e GETDescribeInstanceRefreshesVersionEnum) ToPointer() *GETDescribeInstanceRefreshesVersionEnum {
	return &e
}

func (e *GETDescribeInstanceRefreshesVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2011-01-01":
		*e = GETDescribeInstanceRefreshesVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDescribeInstanceRefreshesVersionEnum: %v", v)
	}
}

type GETDescribeInstanceRefreshesRequest struct {
	Action GETDescribeInstanceRefreshesActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// The name of the Auto Scaling group.
	AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	// One or more instance refresh IDs.
	InstanceRefreshIds []string `queryParam:"style=form,explode=true,name=InstanceRefreshIds"`
	// The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
	MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
	// The token for the next set of items to return. (You received this token from a previous call.)
	NextToken         *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version           GETDescribeInstanceRefreshesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETDescribeInstanceRefreshesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
