package shared

type CreateModelResponse struct {
	ContentType map[string]interface{} `json:"ContentType,omitempty"`
	Description map[string]interface{} `json:"Description,omitempty"`
	ModelID     map[string]interface{} `json:"ModelId,omitempty"`
	Name        map[string]interface{} `json:"Name,omitempty"`
	Schema      map[string]interface{} `json:"Schema,omitempty"`
}
