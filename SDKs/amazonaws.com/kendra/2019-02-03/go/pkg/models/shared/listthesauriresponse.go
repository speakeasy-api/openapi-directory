package shared

type ListThesauriResponse struct {
	NextToken             *string            `json:"NextToken,omitempty"`
	ThesaurusSummaryItems []ThesaurusSummary `json:"ThesaurusSummaryItems,omitempty"`
}
