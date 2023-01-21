package shared

type BatchDeleteDocumentResponse struct {
	FailedDocuments []BatchDeleteDocumentResponseFailedDocument `json:"FailedDocuments,omitempty"`
}
