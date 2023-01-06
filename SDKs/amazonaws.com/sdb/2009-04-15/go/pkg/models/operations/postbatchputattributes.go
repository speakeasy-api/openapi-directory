package operations

type PostBatchPutAttributesActionEnum string

const (
	POSTBatchPutAttributesActionEnumBatchPutAttributes PostBatchPutAttributesActionEnum = "BatchPutAttributes"
)

type PostBatchPutAttributesVersionEnum string

const (
	POSTBatchPutAttributesVersionEnumTwoThousandAndNine0415 PostBatchPutAttributesVersionEnum = "2009-04-15"
)

type PostBatchPutAttributesQueryParams struct {
	AWSAccessKeyID   string                            `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostBatchPutAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Signature        string                            `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                            `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                            `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                            `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostBatchPutAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBatchPutAttributesRequest struct {
	QueryParams PostBatchPutAttributesQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBatchPutAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
