package operations

import (
	"openapi/pkg/models/shared"
)

type ListCostCategoryDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCostCategoryDefinitionsXAmzTargetEnum string

const (
	ListCostCategoryDefinitionsXAmzTargetEnumAwsInsightsIndexServiceListCostCategoryDefinitions ListCostCategoryDefinitionsXAmzTargetEnum = "AWSInsightsIndexService.ListCostCategoryDefinitions"
)

type ListCostCategoryDefinitionsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCostCategoryDefinitionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCostCategoryDefinitionsRequest struct {
	QueryParams ListCostCategoryDefinitionsQueryParams
	Headers     ListCostCategoryDefinitionsHeaders
	Request     shared.ListCostCategoryDefinitionsRequest `request:"mediaType=application/json"`
}

type ListCostCategoryDefinitionsResponse struct {
	ContentType                         string
	LimitExceededException              *interface{}
	ListCostCategoryDefinitionsResponse *shared.ListCostCategoryDefinitionsResponse
	StatusCode                          int64
}
