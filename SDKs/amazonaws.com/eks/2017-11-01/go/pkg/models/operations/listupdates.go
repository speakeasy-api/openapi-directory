// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListUpdatesRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The names of the installed add-ons that have available updates.
	AddonName *string `queryParam:"style=form,explode=true,name=addonName"`
	// The maximum number of update results returned by <code>ListUpdates</code> in paginated output. When you use this parameter, <code>ListUpdates</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListUpdates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListUpdates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// The name of the Amazon EKS cluster to list updates for.
	Name string `pathParam:"style=simple,explode=false,name=name"`
	// The <code>nextToken</code> value returned from a previous paginated <code>ListUpdates</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
	// The name of the Amazon EKS managed node group to list updates for.
	NodegroupName *string `queryParam:"style=form,explode=true,name=nodegroupName"`
}

type ListUpdatesResponse struct {
	// ClientException
	ClientException interface{}
	ContentType     string
	// InvalidParameterException
	InvalidParameterException interface{}
	// Success
	ListUpdatesResponse *shared.ListUpdatesResponse
	StatusCode          int
	RawResponse         *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ServerException
	ServerException interface{}
}
