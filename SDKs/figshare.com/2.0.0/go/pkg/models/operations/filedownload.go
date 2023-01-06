package operations

type FileDownloadPathParams struct {
	FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type FileDownloadRequest struct {
	PathParams FileDownloadPathParams
}

type FileDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
