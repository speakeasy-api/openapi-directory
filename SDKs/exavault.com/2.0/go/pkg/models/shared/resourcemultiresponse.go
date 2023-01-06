package shared

type ResourceMultiResponse struct {
	Responses []interface{} `json:"responses,omitempty"`
}
