// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeScalingPlanResourcesXAmzTargetEnum
type DescribeScalingPlanResourcesXAmzTargetEnum string

const (
	DescribeScalingPlanResourcesXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources DescribeScalingPlanResourcesXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"
)

func (e DescribeScalingPlanResourcesXAmzTargetEnum) ToPointer() *DescribeScalingPlanResourcesXAmzTargetEnum {
	return &e
}

func (e *DescribeScalingPlanResourcesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources":
		*e = DescribeScalingPlanResourcesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeScalingPlanResourcesXAmzTargetEnum: %v", v)
	}
}

type DescribeScalingPlanResourcesRequest struct {
	DescribeScalingPlanResourcesRequest shared.DescribeScalingPlanResourcesRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                       *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                   *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                      *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                            *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                   *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                       *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                   *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                          DescribeScalingPlanResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeScalingPlanResourcesResponse struct {
	// ConcurrentUpdateException
	ConcurrentUpdateException interface{}
	ContentType               string
	// Success
	DescribeScalingPlanResourcesResponse *shared.DescribeScalingPlanResourcesResponse
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidNextTokenException
	InvalidNextTokenException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ValidationException
	ValidationException interface{}
}
