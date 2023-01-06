package shared

type GetInstancesHealthStatusResponse struct {
	NextToken *string           `json:"NextToken,omitempty"`
	Status    map[string]string `json:"Status,omitempty"`
}
