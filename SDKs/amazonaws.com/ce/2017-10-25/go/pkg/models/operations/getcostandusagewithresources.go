// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetCostAndUsageWithResourcesXAmzTargetEnum
type GetCostAndUsageWithResourcesXAmzTargetEnum string

const (
	GetCostAndUsageWithResourcesXAmzTargetEnumAwsInsightsIndexServiceGetCostAndUsageWithResources GetCostAndUsageWithResourcesXAmzTargetEnum = "AWSInsightsIndexService.GetCostAndUsageWithResources"
)

func (e GetCostAndUsageWithResourcesXAmzTargetEnum) ToPointer() *GetCostAndUsageWithResourcesXAmzTargetEnum {
	return &e
}

func (e *GetCostAndUsageWithResourcesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSInsightsIndexService.GetCostAndUsageWithResources":
		*e = GetCostAndUsageWithResourcesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetCostAndUsageWithResourcesXAmzTargetEnum: %v", v)
	}
}

type GetCostAndUsageWithResourcesRequest struct {
	GetCostAndUsageWithResourcesRequest shared.GetCostAndUsageWithResourcesRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                       *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                   *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                      *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                            *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                   *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                       *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                   *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                          GetCostAndUsageWithResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCostAndUsageWithResourcesResponse struct {
	// BillExpirationException
	BillExpirationException interface{}
	ContentType             string
	// DataUnavailableException
	DataUnavailableException interface{}
	// Success
	GetCostAndUsageWithResourcesResponse *shared.GetCostAndUsageWithResourcesResponse
	// InvalidNextTokenException
	InvalidNextTokenException interface{}
	// LimitExceededException
	LimitExceededException interface{}
	// RequestChangedException
	RequestChangedException interface{}
	StatusCode              int
	RawResponse             *http.Response
}
