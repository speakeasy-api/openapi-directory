package operations

type PostDeleteSSHPublicKeyActionEnum string

const (
	POSTDeleteSSHPublicKeyActionEnumDeleteSSHPublicKey PostDeleteSSHPublicKeyActionEnum = "DeleteSSHPublicKey"
)

type PostDeleteSSHPublicKeyVersionEnum string

const (
	POSTDeleteSSHPublicKeyVersionEnumTwoThousandAndTen0508 PostDeleteSSHPublicKeyVersionEnum = "2010-05-08"
)

type PostDeleteSSHPublicKeyQueryParams struct {
	Action  PostDeleteSSHPublicKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteSSHPublicKeyRequest struct {
	QueryParams PostDeleteSSHPublicKeyQueryParams
	Headers     PostDeleteSSHPublicKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSSHPublicKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
