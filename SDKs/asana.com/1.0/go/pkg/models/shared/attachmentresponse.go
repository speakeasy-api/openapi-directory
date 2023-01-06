package shared

import (
	"time"
)

// AttachmentResponse
// An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
type AttachmentResponse struct {
	CreatedAt   *time.Time             `json:"created_at,omitempty"`
	DownloadURL *string                `json:"download_url,omitempty"`
	Host        *string                `json:"host,omitempty"`
	Parent      map[string]interface{} `json:"parent,omitempty"`
	ViewURL     *string                `json:"view_url,omitempty"`
}
