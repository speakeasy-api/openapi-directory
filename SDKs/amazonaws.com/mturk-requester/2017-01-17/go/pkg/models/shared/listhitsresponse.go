package shared

type ListHiTsResponse struct {
	HITs       []Hit   `json:"HITs,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	NumResults *int64  `json:"NumResults,omitempty"`
}
