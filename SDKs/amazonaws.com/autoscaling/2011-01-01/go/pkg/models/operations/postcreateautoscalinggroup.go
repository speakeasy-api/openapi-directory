package operations

type PostCreateAutoScalingGroupActionEnum string

const (
	POSTCreateAutoScalingGroupActionEnumCreateAutoScalingGroup PostCreateAutoScalingGroupActionEnum = "CreateAutoScalingGroup"
)

type PostCreateAutoScalingGroupVersionEnum string

const (
	POSTCreateAutoScalingGroupVersionEnumTwoThousandAndEleven0101 PostCreateAutoScalingGroupVersionEnum = "2011-01-01"
)

type PostCreateAutoScalingGroupQueryParams struct {
	Action  PostCreateAutoScalingGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateAutoScalingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateAutoScalingGroupRequest struct {
	QueryParams PostCreateAutoScalingGroupQueryParams
	Headers     PostCreateAutoScalingGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateAutoScalingGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
