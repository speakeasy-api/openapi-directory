// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListImportFileTaskRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	//  The total number of items to return. The maximum value is 100.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	//  The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImportFileTaskResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InternalServerException
	InternalServerException interface{}
	// Success
	ListImportFileTaskResponse *shared.ListImportFileTaskResponse
	StatusCode                 int
	RawResponse                *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
