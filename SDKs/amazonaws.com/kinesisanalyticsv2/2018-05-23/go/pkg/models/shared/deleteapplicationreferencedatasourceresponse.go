package shared

type DeleteApplicationReferenceDataSourceResponse struct {
	ApplicationARN       *string `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64  `json:"ApplicationVersionId,omitempty"`
}
