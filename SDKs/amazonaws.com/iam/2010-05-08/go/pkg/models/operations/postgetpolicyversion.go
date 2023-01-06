package operations

type PostGetPolicyVersionActionEnum string

const (
	POSTGetPolicyVersionActionEnumGetPolicyVersion PostGetPolicyVersionActionEnum = "GetPolicyVersion"
)

type PostGetPolicyVersionVersionEnum string

const (
	POSTGetPolicyVersionVersionEnumTwoThousandAndTen0508 PostGetPolicyVersionVersionEnum = "2010-05-08"
)

type PostGetPolicyVersionQueryParams struct {
	Action  PostGetPolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetPolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetPolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetPolicyVersionRequest struct {
	QueryParams PostGetPolicyVersionQueryParams
	Headers     PostGetPolicyVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetPolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
