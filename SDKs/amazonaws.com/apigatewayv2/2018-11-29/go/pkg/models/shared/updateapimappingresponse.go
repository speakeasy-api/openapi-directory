package shared

type UpdateAPIMappingResponse struct {
	APIID         map[string]interface{} `json:"ApiId,omitempty"`
	APIMappingID  map[string]interface{} `json:"ApiMappingId,omitempty"`
	APIMappingKey map[string]interface{} `json:"ApiMappingKey,omitempty"`
	Stage         map[string]interface{} `json:"Stage,omitempty"`
}
