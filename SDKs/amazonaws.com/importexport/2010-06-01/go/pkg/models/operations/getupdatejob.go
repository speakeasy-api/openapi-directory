package operations

type GetUpdateJobActionEnum string

const (
	GETUpdateJobActionEnumUpdateJob GetUpdateJobActionEnum = "UpdateJob"
)

type GetUpdateJobJobTypeEnum string

const (
	GETUpdateJobJobTypeEnumImport GetUpdateJobJobTypeEnum = "Import"
	GETUpdateJobJobTypeEnumExport GetUpdateJobJobTypeEnum = "Export"
)

type GetUpdateJobOperationEnum string

const (
	GETUpdateJobOperationEnumUpdateJob GetUpdateJobOperationEnum = "UpdateJob"
)

type GetUpdateJobVersionEnum string

const (
	GETUpdateJobVersionEnumTwoThousandAndTen0601 GetUpdateJobVersionEnum = "2010-06-01"
)

type GetUpdateJobQueryParams struct {
	APIVersion       *string                   `queryParam:"style=form,explode=true,name=APIVersion"`
	AWSAccessKeyID   string                    `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetUpdateJobActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	JobID            string                    `queryParam:"style=form,explode=true,name=JobId"`
	JobType          GetUpdateJobJobTypeEnum   `queryParam:"style=form,explode=true,name=JobType"`
	Manifest         string                    `queryParam:"style=form,explode=true,name=Manifest"`
	Operation        GetUpdateJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                    `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                    `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                    `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                    `queryParam:"style=form,explode=true,name=Timestamp"`
	ValidateOnly     bool                      `queryParam:"style=form,explode=true,name=ValidateOnly"`
	Version          GetUpdateJobVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateJobRequest struct {
	QueryParams GetUpdateJobQueryParams
}

type GetUpdateJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
