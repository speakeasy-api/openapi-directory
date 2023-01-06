package shared

type DeleteApplicationInputProcessingConfigurationResponse struct {
	ApplicationARN       *string `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64  `json:"ApplicationVersionId,omitempty"`
}
