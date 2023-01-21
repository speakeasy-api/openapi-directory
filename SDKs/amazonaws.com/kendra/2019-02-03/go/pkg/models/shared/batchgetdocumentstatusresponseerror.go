package shared

// BatchGetDocumentStatusResponseError
// Provides a response when the status of a document could not be retrieved.
type BatchGetDocumentStatusResponseError struct {
	DocumentID   *string        `json:"DocumentId,omitempty"`
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string        `json:"ErrorMessage,omitempty"`
}
