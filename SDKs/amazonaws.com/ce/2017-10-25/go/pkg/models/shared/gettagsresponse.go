package shared

type GetTagsResponse struct {
	NextPageToken *string  `json:"NextPageToken,omitempty"`
	ReturnSize    int64    `json:"ReturnSize"`
	Tags          []string `json:"Tags"`
	TotalSize     int64    `json:"TotalSize"`
}
