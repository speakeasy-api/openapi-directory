package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCostCategoryDefinitionXAmzTargetEnum string

const (
	DeleteCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceDeleteCostCategoryDefinition DeleteCostCategoryDefinitionXAmzTargetEnum = "AWSInsightsIndexService.DeleteCostCategoryDefinition"
)

type DeleteCostCategoryDefinitionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCostCategoryDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteCostCategoryDefinitionRequest struct {
	Headers DeleteCostCategoryDefinitionHeaders
	Request shared.DeleteCostCategoryDefinitionRequest `request:"mediaType=application/json"`
}

type DeleteCostCategoryDefinitionResponse struct {
	ContentType                          string
	DeleteCostCategoryDefinitionResponse *shared.DeleteCostCategoryDefinitionResponse
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
