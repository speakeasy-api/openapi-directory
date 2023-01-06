package shared

type ListDatasetsResponse struct {
	Datasets  map[string]interface{} `json:"datasets,omitempty"`
	NextToken *string                `json:"nextToken,omitempty"`
}
