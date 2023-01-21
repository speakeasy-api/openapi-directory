package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCostCategoryDefinitionXAmzTargetEnum string

const (
	CreateCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceCreateCostCategoryDefinition CreateCostCategoryDefinitionXAmzTargetEnum = "AWSInsightsIndexService.CreateCostCategoryDefinition"
)

type CreateCostCategoryDefinitionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCostCategoryDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCostCategoryDefinitionRequest struct {
	Headers CreateCostCategoryDefinitionHeaders
	Request shared.CreateCostCategoryDefinitionRequest `request:"mediaType=application/json"`
}

type CreateCostCategoryDefinitionResponse struct {
	ContentType                          string
	CreateCostCategoryDefinitionResponse *shared.CreateCostCategoryDefinitionResponse
	LimitExceededException               *interface{}
	ServiceQuotaExceededException        *interface{}
	StatusCode                           int64
}
