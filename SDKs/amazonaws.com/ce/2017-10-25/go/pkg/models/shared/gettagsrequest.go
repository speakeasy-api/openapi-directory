package shared

type GetTagsRequest struct {
	Filter        *Expression      `json:"Filter,omitempty"`
	MaxResults    *int64           `json:"MaxResults,omitempty"`
	NextPageToken *string          `json:"NextPageToken,omitempty"`
	SearchString  *string          `json:"SearchString,omitempty"`
	SortBy        []SortDefinition `json:"SortBy,omitempty"`
	TagKey        *string          `json:"TagKey,omitempty"`
	TimePeriod    DateInterval     `json:"TimePeriod"`
}
