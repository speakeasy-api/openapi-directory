package shared

// InputConfiguration
// Describe the input configuration
type InputConfiguration struct {
	Files            []InputFileConfiguration `json:"files"`
	TransformFileURL *string                  `json:"transformFileUrl,omitempty"`
}
