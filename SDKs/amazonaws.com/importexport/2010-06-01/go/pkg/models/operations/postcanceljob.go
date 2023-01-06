package operations

type PostCancelJobActionEnum string

const (
	POSTCancelJobActionEnumCancelJob PostCancelJobActionEnum = "CancelJob"
)

type PostCancelJobOperationEnum string

const (
	POSTCancelJobOperationEnumCancelJob PostCancelJobOperationEnum = "CancelJob"
)

type PostCancelJobVersionEnum string

const (
	POSTCancelJobVersionEnumTwoThousandAndTen0601 PostCancelJobVersionEnum = "2010-06-01"
)

type PostCancelJobQueryParams struct {
	AWSAccessKeyID   string                     `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostCancelJobActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Operation        PostCancelJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                     `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                     `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                     `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                     `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostCancelJobVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type PostCancelJobRequest struct {
	QueryParams PostCancelJobQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCancelJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
