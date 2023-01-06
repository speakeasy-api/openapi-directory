package shared

type DetectPhiResponse struct {
	Entities        []Entity               `json:"Entities"`
	ModelVersion    string                 `json:"ModelVersion"`
	PaginationToken map[string]interface{} `json:"PaginationToken,omitempty"`
}
