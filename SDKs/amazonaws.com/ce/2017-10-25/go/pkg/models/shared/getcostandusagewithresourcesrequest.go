package shared

type GetCostAndUsageWithResourcesRequest struct {
	Filter        Expression        `json:"Filter"`
	Granularity   GranularityEnum   `json:"Granularity"`
	GroupBy       []GroupDefinition `json:"GroupBy,omitempty"`
	Metrics       []string          `json:"Metrics,omitempty"`
	NextPageToken *string           `json:"NextPageToken,omitempty"`
	TimePeriod    DateInterval      `json:"TimePeriod"`
}
