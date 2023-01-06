package shared

type AddApplicationInputResponse struct {
	ApplicationARN       *string            `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64             `json:"ApplicationVersionId,omitempty"`
	InputDescriptions    []InputDescription `json:"InputDescriptions,omitempty"`
}
