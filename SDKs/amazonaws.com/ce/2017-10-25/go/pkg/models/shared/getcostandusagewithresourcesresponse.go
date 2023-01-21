package shared

type GetCostAndUsageWithResourcesResponse struct {
	DimensionValueAttributes []DimensionValuesWithAttributes `json:"DimensionValueAttributes,omitempty"`
	GroupDefinitions         []GroupDefinition               `json:"GroupDefinitions,omitempty"`
	NextPageToken            *string                         `json:"NextPageToken,omitempty"`
	ResultsByTime            []ResultByTime                  `json:"ResultsByTime,omitempty"`
}
