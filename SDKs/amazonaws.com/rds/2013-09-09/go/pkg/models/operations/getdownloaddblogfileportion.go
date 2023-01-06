package operations

type GetDownloadDbLogFilePortionActionEnum string

const (
	GETDownloadDBLogFilePortionActionEnumDownloadDbLogFilePortion GetDownloadDbLogFilePortionActionEnum = "DownloadDBLogFilePortion"
)

type GetDownloadDbLogFilePortionVersionEnum string

const (
	GETDownloadDBLogFilePortionVersionEnumTwoThousandAndThirteen0909 GetDownloadDbLogFilePortionVersionEnum = "2013-09-09"
)

type GetDownloadDbLogFilePortionQueryParams struct {
	Action               GetDownloadDbLogFilePortionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBInstanceIdentifier string                                 `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	LogFileName          string                                 `queryParam:"style=form,explode=true,name=LogFileName"`
	Marker               *string                                `queryParam:"style=form,explode=true,name=Marker"`
	NumberOfLines        *int64                                 `queryParam:"style=form,explode=true,name=NumberOfLines"`
	Version              GetDownloadDbLogFilePortionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDownloadDbLogFilePortionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDownloadDbLogFilePortionRequest struct {
	QueryParams GetDownloadDbLogFilePortionQueryParams
	Headers     GetDownloadDbLogFilePortionHeaders
}

type GetDownloadDbLogFilePortionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
