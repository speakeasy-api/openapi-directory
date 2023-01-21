package shared

type ListAutoMlJobsResponse struct {
	AutoMLJobSummaries []AutoMlJobSummary `json:"AutoMLJobSummaries"`
	NextToken          *string            `json:"NextToken,omitempty"`
}
