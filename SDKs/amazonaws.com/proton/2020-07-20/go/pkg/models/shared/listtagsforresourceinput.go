package shared

type ListTagsForResourceInput struct {
	MaxResults  *int64                 `json:"maxResults,omitempty"`
	NextToken   map[string]interface{} `json:"nextToken,omitempty"`
	ResourceArn string                 `json:"resourceArn"`
}
