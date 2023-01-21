package operations

import (
	"openapi/pkg/models/shared"
)

type GetCostCategoriesXAmzTargetEnum string

const (
	GetCostCategoriesXAmzTargetEnumAwsInsightsIndexServiceGetCostCategories GetCostCategoriesXAmzTargetEnum = "AWSInsightsIndexService.GetCostCategories"
)

type GetCostCategoriesHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCostCategoriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCostCategoriesRequest struct {
	Headers GetCostCategoriesHeaders
	Request shared.GetCostCategoriesRequest `request:"mediaType=application/json"`
}

type GetCostCategoriesResponse struct {
	BillExpirationException   *interface{}
	ContentType               string
	DataUnavailableException  *interface{}
	GetCostCategoriesResponse *shared.GetCostCategoriesResponse
	InvalidNextTokenException *interface{}
	LimitExceededException    *interface{}
	RequestChangedException   *interface{}
	StatusCode                int64
}
