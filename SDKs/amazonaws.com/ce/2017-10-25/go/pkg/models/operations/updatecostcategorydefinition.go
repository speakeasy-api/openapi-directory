package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCostCategoryDefinitionXAmzTargetEnum string

const (
	UpdateCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceUpdateCostCategoryDefinition UpdateCostCategoryDefinitionXAmzTargetEnum = "AWSInsightsIndexService.UpdateCostCategoryDefinition"
)

type UpdateCostCategoryDefinitionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCostCategoryDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateCostCategoryDefinitionRequest struct {
	Headers UpdateCostCategoryDefinitionHeaders
	Request shared.UpdateCostCategoryDefinitionRequest `request:"mediaType=application/json"`
}

type UpdateCostCategoryDefinitionResponse struct {
	ContentType                          string
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	ServiceQuotaExceededException        *interface{}
	StatusCode                           int64
	UpdateCostCategoryDefinitionResponse *shared.UpdateCostCategoryDefinitionResponse
}
