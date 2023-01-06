package shared

type BatchDeleteImageResponse struct {
	Failures map[string]interface{} `json:"failures,omitempty"`
	ImageIds []ImageIdentifier      `json:"imageIds,omitempty"`
}
