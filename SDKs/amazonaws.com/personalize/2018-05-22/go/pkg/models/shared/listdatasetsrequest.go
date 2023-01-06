package shared

type ListDatasetsRequest struct {
	DatasetGroupArn map[string]interface{} `json:"datasetGroupArn,omitempty"`
	MaxResults      *int64                 `json:"maxResults,omitempty"`
	NextToken       *string                `json:"nextToken,omitempty"`
}
