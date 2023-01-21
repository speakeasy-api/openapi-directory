package shared

type BatchGetDocumentStatusRequest struct {
	DocumentInfoList []DocumentInfo `json:"DocumentInfoList"`
	IndexID          string         `json:"IndexId"`
}
