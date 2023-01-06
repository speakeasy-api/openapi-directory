package operations

type DownloadQueryParams struct {
	DownloadArchiveName *string  `queryParam:"style=form,explode=true,name=downloadArchiveName"`
	Resources           []string `queryParam:"style=form,explode=true,name=resources[]"`
}

type DownloadHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DownloadRequest struct {
	QueryParams DownloadQueryParams
	Headers     DownloadHeaders
}

type DownloadResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	Download200ApplicationOctetStreamBinaryString []byte
	Download200ApplicationZipBinaryString         []byte
}
