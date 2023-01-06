package shared

type GetBackendAPIModelsResponse struct {
	Models map[string]interface{} `json:"Models,omitempty"`
	Status map[string]interface{} `json:"Status,omitempty"`
}
