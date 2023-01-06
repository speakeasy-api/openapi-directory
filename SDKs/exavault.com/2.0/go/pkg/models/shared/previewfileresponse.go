package shared

// PreviewFileResponse
// Response object for preview file
type PreviewFileResponse struct {
	Data           *PreviewFile `json:"data,omitempty"`
	ResponseStatus *int64       `json:"responseStatus,omitempty"`
}
