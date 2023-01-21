package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavingsPlansCoverageQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetSavingsPlansCoverageXAmzTargetEnum string

const (
	GetSavingsPlansCoverageXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansCoverage GetSavingsPlansCoverageXAmzTargetEnum = "AWSInsightsIndexService.GetSavingsPlansCoverage"
)

type GetSavingsPlansCoverageHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSavingsPlansCoverageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSavingsPlansCoverageRequest struct {
	QueryParams GetSavingsPlansCoverageQueryParams
	Headers     GetSavingsPlansCoverageHeaders
	Request     shared.GetSavingsPlansCoverageRequest `request:"mediaType=application/json"`
}

type GetSavingsPlansCoverageResponse struct {
	ContentType                     string
	DataUnavailableException        *interface{}
	GetSavingsPlansCoverageResponse *shared.GetSavingsPlansCoverageResponse
	InvalidNextTokenException       *interface{}
	LimitExceededException          *interface{}
	StatusCode                      int64
}
