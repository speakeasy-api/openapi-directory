package shared

type GetDimensionValuesResponse struct {
	DimensionValues []DimensionValuesWithAttributes `json:"DimensionValues"`
	NextPageToken   *string                         `json:"NextPageToken,omitempty"`
	ReturnSize      int64                           `json:"ReturnSize"`
	TotalSize       int64                           `json:"TotalSize"`
}
