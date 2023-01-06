package operations

type PostCreateTrafficMirrorSessionActionEnum string

const (
	POSTCreateTrafficMirrorSessionActionEnumCreateTrafficMirrorSession PostCreateTrafficMirrorSessionActionEnum = "CreateTrafficMirrorSession"
)

type PostCreateTrafficMirrorSessionVersionEnum string

const (
	POSTCreateTrafficMirrorSessionVersionEnumTwoThousandAndSixteen1115 PostCreateTrafficMirrorSessionVersionEnum = "2016-11-15"
)

type PostCreateTrafficMirrorSessionQueryParams struct {
	Action  PostCreateTrafficMirrorSessionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTrafficMirrorSessionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTrafficMirrorSessionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateTrafficMirrorSessionRequest struct {
	QueryParams PostCreateTrafficMirrorSessionQueryParams
	Headers     PostCreateTrafficMirrorSessionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTrafficMirrorSessionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
