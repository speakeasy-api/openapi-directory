package shared

type BatchPutDocumentResponse struct {
	FailedDocuments []BatchPutDocumentResponseFailedDocument `json:"FailedDocuments,omitempty"`
}
