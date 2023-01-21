package shared

type ListFaqsResponse struct {
	FaqSummaryItems []FaqSummary `json:"FaqSummaryItems,omitempty"`
	NextToken       *string      `json:"NextToken,omitempty"`
}
