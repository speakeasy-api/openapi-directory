package shared

type AddApplicationOutputResponse struct {
	ApplicationARN       *string             `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64              `json:"ApplicationVersionId,omitempty"`
	OutputDescriptions   []OutputDescription `json:"OutputDescriptions,omitempty"`
}
