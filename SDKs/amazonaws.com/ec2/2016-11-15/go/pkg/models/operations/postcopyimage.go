package operations

type PostCopyImageActionEnum string

const (
	POSTCopyImageActionEnumCopyImage PostCopyImageActionEnum = "CopyImage"
)

type PostCopyImageVersionEnum string

const (
	POSTCopyImageVersionEnumTwoThousandAndSixteen1115 PostCopyImageVersionEnum = "2016-11-15"
)

type PostCopyImageQueryParams struct {
	Action  PostCopyImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyImageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCopyImageRequest struct {
	QueryParams PostCopyImageQueryParams
	Headers     PostCopyImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
