// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

type ListDomainDeliverabilityCampaignsRequest struct {
	// The last day that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.
	EndDate time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	// A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
	// The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The first day that you want to obtain deliverability data for.
	StartDate time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	// The domain to obtain deliverability data for.
	SubscribedDomain  string  `pathParam:"style=simple,explode=false,name=SubscribedDomain"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListDomainDeliverabilityCampaignsResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	ListDomainDeliverabilityCampaignsResponse *shared.ListDomainDeliverabilityCampaignsResponse
	// NotFoundException
	NotFoundException interface{}
	StatusCode        int
	RawResponse       *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
