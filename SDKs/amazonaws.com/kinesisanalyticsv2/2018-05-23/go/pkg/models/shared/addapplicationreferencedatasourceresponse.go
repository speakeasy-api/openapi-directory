package shared

type AddApplicationReferenceDataSourceResponse struct {
	ApplicationARN                  *string                          `json:"ApplicationARN,omitempty"`
	ApplicationVersionID            *int64                           `json:"ApplicationVersionId,omitempty"`
	ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions,omitempty"`
}
