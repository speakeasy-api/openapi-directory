package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavingsPlansUtilizationXAmzTargetEnum string

const (
	GetSavingsPlansUtilizationXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansUtilization GetSavingsPlansUtilizationXAmzTargetEnum = "AWSInsightsIndexService.GetSavingsPlansUtilization"
)

type GetSavingsPlansUtilizationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSavingsPlansUtilizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSavingsPlansUtilizationRequest struct {
	Headers GetSavingsPlansUtilizationHeaders
	Request shared.GetSavingsPlansUtilizationRequest `request:"mediaType=application/json"`
}

type GetSavingsPlansUtilizationResponse struct {
	ContentType                        string
	DataUnavailableException           *interface{}
	GetSavingsPlansUtilizationResponse *shared.GetSavingsPlansUtilizationResponse
	LimitExceededException             *interface{}
	StatusCode                         int64
}
