package operations

import (
	"openapi/pkg/models/shared"
)

type ListIndicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListIndicesXAmzTargetEnum string

const (
	ListIndicesXAmzTargetEnumAwsKendraFrontendServiceListIndices ListIndicesXAmzTargetEnum = "AWSKendraFrontendService.ListIndices"
)

type ListIndicesHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListIndicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListIndicesRequest struct {
	QueryParams ListIndicesQueryParams
	Headers     ListIndicesHeaders
	Request     shared.ListIndicesRequest `request:"mediaType=application/json"`
}

type ListIndicesResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListIndicesResponse     *shared.ListIndicesResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
