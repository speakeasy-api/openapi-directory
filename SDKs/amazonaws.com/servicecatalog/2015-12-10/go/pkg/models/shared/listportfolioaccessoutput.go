package shared

type ListPortfolioAccessOutput struct {
	AccountIds    map[string]interface{} `json:"AccountIds,omitempty"`
	NextPageToken *string                `json:"NextPageToken,omitempty"`
}
