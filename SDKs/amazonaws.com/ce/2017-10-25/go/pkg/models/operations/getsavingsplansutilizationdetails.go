package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavingsPlansUtilizationDetailsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetSavingsPlansUtilizationDetailsXAmzTargetEnum string

const (
	GetSavingsPlansUtilizationDetailsXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansUtilizationDetails GetSavingsPlansUtilizationDetailsXAmzTargetEnum = "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails"
)

type GetSavingsPlansUtilizationDetailsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSavingsPlansUtilizationDetailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSavingsPlansUtilizationDetailsRequest struct {
	QueryParams GetSavingsPlansUtilizationDetailsQueryParams
	Headers     GetSavingsPlansUtilizationDetailsHeaders
	Request     shared.GetSavingsPlansUtilizationDetailsRequest `request:"mediaType=application/json"`
}

type GetSavingsPlansUtilizationDetailsResponse struct {
	ContentType                               string
	DataUnavailableException                  *interface{}
	GetSavingsPlansUtilizationDetailsResponse *shared.GetSavingsPlansUtilizationDetailsResponse
	InvalidNextTokenException                 *interface{}
	LimitExceededException                    *interface{}
	StatusCode                                int64
}
