// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DescribeAddonVersionsRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
	AddonName *string `queryParam:"style=form,explode=true,name=addonName"`
	// The Kubernetes versions that you can use the add-on with.
	KubernetesVersion *string `queryParam:"style=form,explode=true,name=kubernetesVersion"`
	// The maximum number of results to return.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeAddonVersionsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
	// The owner of the add-on. For valid <code>owners</code>, don't specify a value for this property.
	Owners []string `queryParam:"style=form,explode=true,name=owners"`
	// The publisher of the add-on. For valid <code>publishers</code>, don't specify a value for this property.
	Publishers []string `queryParam:"style=form,explode=true,name=publishers"`
	// The type of the add-on. For valid <code>types</code>, don't specify a value for this property.
	Types []string `queryParam:"style=form,explode=true,name=types"`
}

type DescribeAddonVersionsResponse struct {
	ContentType string
	// Success
	DescribeAddonVersionsResponse *shared.DescribeAddonVersionsResponse
	// InvalidParameterException
	InvalidParameterException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ServerException
	ServerException interface{}
	StatusCode      int
	RawResponse     *http.Response
}
