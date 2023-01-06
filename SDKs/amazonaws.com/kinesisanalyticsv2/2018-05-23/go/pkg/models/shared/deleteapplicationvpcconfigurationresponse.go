package shared

type DeleteApplicationVpcConfigurationResponse struct {
	ApplicationARN       *string `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64  `json:"ApplicationVersionId,omitempty"`
}
