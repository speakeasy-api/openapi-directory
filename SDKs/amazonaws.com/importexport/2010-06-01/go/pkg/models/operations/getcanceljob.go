package operations

type GetCancelJobActionEnum string

const (
	GETCancelJobActionEnumCancelJob GetCancelJobActionEnum = "CancelJob"
)

type GetCancelJobOperationEnum string

const (
	GETCancelJobOperationEnumCancelJob GetCancelJobOperationEnum = "CancelJob"
)

type GetCancelJobVersionEnum string

const (
	GETCancelJobVersionEnumTwoThousandAndTen0601 GetCancelJobVersionEnum = "2010-06-01"
)

type GetCancelJobQueryParams struct {
	APIVersion       *string                   `queryParam:"style=form,explode=true,name=APIVersion"`
	AWSAccessKeyID   string                    `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetCancelJobActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	JobID            string                    `queryParam:"style=form,explode=true,name=JobId"`
	Operation        GetCancelJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                    `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                    `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                    `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                    `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          GetCancelJobVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelJobRequest struct {
	QueryParams GetCancelJobQueryParams
}

type GetCancelJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
