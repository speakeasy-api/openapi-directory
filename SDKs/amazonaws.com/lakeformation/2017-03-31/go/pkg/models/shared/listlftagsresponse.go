package shared

type ListLfTagsResponse struct {
	LFTags    []LfTagPair `json:"LFTags,omitempty"`
	NextToken *string     `json:"NextToken,omitempty"`
}
