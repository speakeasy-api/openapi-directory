// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetTypedLinkFacetInformationRequestBody struct {
	// The unique name of the typed link facet.
	Name string `json:"Name"`
}

type GetTypedLinkFacetInformationRequest struct {
	RequestBody       GetTypedLinkFacetInformationRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.
	XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type GetTypedLinkFacetInformationResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// FacetNotFoundException
	FacetNotFoundException interface{}
	// Success
	GetTypedLinkFacetInformationResponse *shared.GetTypedLinkFacetInformationResponse
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidArnException
	InvalidArnException interface{}
	// InvalidNextTokenException
	InvalidNextTokenException interface{}
	// LimitExceededException
	LimitExceededException interface{}
	StatusCode             int
	RawResponse            *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// RetryableConflictException
	RetryableConflictException interface{}
	// ValidationException
	ValidationException interface{}
}
