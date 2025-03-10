// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeSubscriptionFiltersXAmzTargetEnum
type DescribeSubscriptionFiltersXAmzTargetEnum string

const (
	DescribeSubscriptionFiltersXAmzTargetEnumLogs20140328DescribeSubscriptionFilters DescribeSubscriptionFiltersXAmzTargetEnum = "Logs_20140328.DescribeSubscriptionFilters"
)

func (e DescribeSubscriptionFiltersXAmzTargetEnum) ToPointer() *DescribeSubscriptionFiltersXAmzTargetEnum {
	return &e
}

func (e *DescribeSubscriptionFiltersXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Logs_20140328.DescribeSubscriptionFilters":
		*e = DescribeSubscriptionFiltersXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeSubscriptionFiltersXAmzTargetEnum: %v", v)
	}
}

type DescribeSubscriptionFiltersRequest struct {
	DescribeSubscriptionFiltersRequest shared.DescribeSubscriptionFiltersRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                      *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                  *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                     *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                           *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                  *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                      *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                  *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                         DescribeSubscriptionFiltersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
	// Pagination limit
	Limit *string `queryParam:"style=form,explode=true,name=limit"`
	// Pagination token
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeSubscriptionFiltersResponse struct {
	ContentType string
	// Success
	DescribeSubscriptionFiltersResponse *shared.DescribeSubscriptionFiltersResponse
	// InvalidParameterException
	InvalidParameterException interface{}
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	StatusCode                  int
	RawResponse                 *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
}
