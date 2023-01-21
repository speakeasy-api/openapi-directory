package shared

// BatchDeleteDocumentResponseFailedDocument
// Provides information about documents that could not be removed from an index by the <code>BatchDeleteDocument</code> operation.
type BatchDeleteDocumentResponseFailedDocument struct {
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string        `json:"ErrorMessage,omitempty"`
	ID           *string        `json:"Id,omitempty"`
}
