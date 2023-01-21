package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCostCategoryDefinitionXAmzTargetEnum string

const (
	DescribeCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceDescribeCostCategoryDefinition DescribeCostCategoryDefinitionXAmzTargetEnum = "AWSInsightsIndexService.DescribeCostCategoryDefinition"
)

type DescribeCostCategoryDefinitionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCostCategoryDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeCostCategoryDefinitionRequest struct {
	Headers DescribeCostCategoryDefinitionHeaders
	Request shared.DescribeCostCategoryDefinitionRequest `request:"mediaType=application/json"`
}

type DescribeCostCategoryDefinitionResponse struct {
	ContentType                            string
	DescribeCostCategoryDefinitionResponse *shared.DescribeCostCategoryDefinitionResponse
	LimitExceededException                 *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
