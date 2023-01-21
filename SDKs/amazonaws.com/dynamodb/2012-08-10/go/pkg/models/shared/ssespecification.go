package shared

// SseSpecification
// Represents the settings used to enable server-side encryption.
type SseSpecification struct {
	Enabled        *bool        `json:"Enabled,omitempty"`
	KMSMasterKeyID *string      `json:"KMSMasterKeyId,omitempty"`
	SSEType        *SseTypeEnum `json:"SSEType,omitempty"`
}
