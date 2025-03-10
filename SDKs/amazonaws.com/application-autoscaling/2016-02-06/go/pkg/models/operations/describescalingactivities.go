// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeScalingActivitiesXAmzTargetEnum
type DescribeScalingActivitiesXAmzTargetEnum string

const (
	DescribeScalingActivitiesXAmzTargetEnumAnyScaleFrontendServiceDescribeScalingActivities DescribeScalingActivitiesXAmzTargetEnum = "AnyScaleFrontendService.DescribeScalingActivities"
)

func (e DescribeScalingActivitiesXAmzTargetEnum) ToPointer() *DescribeScalingActivitiesXAmzTargetEnum {
	return &e
}

func (e *DescribeScalingActivitiesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AnyScaleFrontendService.DescribeScalingActivities":
		*e = DescribeScalingActivitiesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeScalingActivitiesXAmzTargetEnum: %v", v)
	}
}

type DescribeScalingActivitiesRequest struct {
	DescribeScalingActivitiesRequest shared.DescribeScalingActivitiesRequest `request:"mediaType=application/json"`
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScalingActivitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeScalingActivitiesResponse struct {
	// ConcurrentUpdateException
	ConcurrentUpdateException interface{}
	ContentType               string
	// Success
	DescribeScalingActivitiesResponse *shared.DescribeScalingActivitiesResponse
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidNextTokenException
	InvalidNextTokenException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ValidationException
	ValidationException interface{}
}
