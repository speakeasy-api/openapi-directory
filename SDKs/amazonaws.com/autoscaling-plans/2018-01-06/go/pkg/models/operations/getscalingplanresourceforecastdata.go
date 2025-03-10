// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetScalingPlanResourceForecastDataXAmzTargetEnum
type GetScalingPlanResourceForecastDataXAmzTargetEnum string

const (
	GetScalingPlanResourceForecastDataXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData GetScalingPlanResourceForecastDataXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
)

func (e GetScalingPlanResourceForecastDataXAmzTargetEnum) ToPointer() *GetScalingPlanResourceForecastDataXAmzTargetEnum {
	return &e
}

func (e *GetScalingPlanResourceForecastDataXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData":
		*e = GetScalingPlanResourceForecastDataXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetScalingPlanResourceForecastDataXAmzTargetEnum: %v", v)
	}
}

type GetScalingPlanResourceForecastDataRequest struct {
	GetScalingPlanResourceForecastDataRequest shared.GetScalingPlanResourceForecastDataRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                             *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                         *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                            *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                                  *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                         *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                             *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                         *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                                GetScalingPlanResourceForecastDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetScalingPlanResourceForecastDataResponse struct {
	ContentType string
	// Success
	GetScalingPlanResourceForecastDataResponse *shared.GetScalingPlanResourceForecastDataResponse
	// InternalServiceException
	InternalServiceException interface{}
	StatusCode               int
	RawResponse              *http.Response
	// ValidationException
	ValidationException interface{}
}
