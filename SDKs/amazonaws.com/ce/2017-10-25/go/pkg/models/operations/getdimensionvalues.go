package operations

import (
	"openapi/pkg/models/shared"
)

type GetDimensionValuesXAmzTargetEnum string

const (
	GetDimensionValuesXAmzTargetEnumAwsInsightsIndexServiceGetDimensionValues GetDimensionValuesXAmzTargetEnum = "AWSInsightsIndexService.GetDimensionValues"
)

type GetDimensionValuesHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDimensionValuesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDimensionValuesRequest struct {
	Headers GetDimensionValuesHeaders
	Request shared.GetDimensionValuesRequest `request:"mediaType=application/json"`
}

type GetDimensionValuesResponse struct {
	BillExpirationException    *interface{}
	ContentType                string
	DataUnavailableException   *interface{}
	GetDimensionValuesResponse *shared.GetDimensionValuesResponse
	InvalidNextTokenException  *interface{}
	LimitExceededException     *interface{}
	RequestChangedException    *interface{}
	StatusCode                 int64
}
