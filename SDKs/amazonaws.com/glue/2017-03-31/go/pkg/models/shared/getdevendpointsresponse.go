package shared

type GetDevEndpointsResponse struct {
	DevEndpoints map[string]interface{} `json:"DevEndpoints,omitempty"`
	NextToken    *string                `json:"NextToken,omitempty"`
}
