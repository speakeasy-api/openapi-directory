package operations

type PostDisableAvailabilityZonesForLoadBalancerActionEnum string

const (
	POSTDisableAvailabilityZonesForLoadBalancerActionEnumDisableAvailabilityZonesForLoadBalancer PostDisableAvailabilityZonesForLoadBalancerActionEnum = "DisableAvailabilityZonesForLoadBalancer"
)

type PostDisableAvailabilityZonesForLoadBalancerVersionEnum string

const (
	POSTDisableAvailabilityZonesForLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostDisableAvailabilityZonesForLoadBalancerVersionEnum = "2012-06-01"
)

type PostDisableAvailabilityZonesForLoadBalancerQueryParams struct {
	Action  PostDisableAvailabilityZonesForLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableAvailabilityZonesForLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableAvailabilityZonesForLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisableAvailabilityZonesForLoadBalancerRequest struct {
	QueryParams PostDisableAvailabilityZonesForLoadBalancerQueryParams
	Headers     PostDisableAvailabilityZonesForLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableAvailabilityZonesForLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
