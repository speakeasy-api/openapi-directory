package shared

type ListThesauriRequest struct {
	IndexID    string  `json:"IndexId"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
