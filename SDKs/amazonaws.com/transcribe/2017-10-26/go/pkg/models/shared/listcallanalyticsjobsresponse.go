package shared

type ListCallAnalyticsJobsResponse struct {
	CallAnalyticsJobSummaries map[string]interface{}      `json:"CallAnalyticsJobSummaries,omitempty"`
	NextToken                 *string                     `json:"NextToken,omitempty"`
	Status                    *CallAnalyticsJobStatusEnum `json:"Status,omitempty"`
}
