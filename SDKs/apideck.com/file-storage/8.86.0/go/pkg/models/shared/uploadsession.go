package shared

import (
	"time"
)

type UploadSession struct {
	ExpiresAt               *time.Time `json:"expires_at,omitempty"`
	ID                      *string    `json:"id,omitempty"`
	ParallelUploadSupported *bool      `json:"parallel_upload_supported,omitempty"`
	PartSize                *float64   `json:"part_size,omitempty"`
	Success                 *bool      `json:"success,omitempty"`
	UploadedByteRange       *string    `json:"uploaded_byte_range,omitempty"`
}
