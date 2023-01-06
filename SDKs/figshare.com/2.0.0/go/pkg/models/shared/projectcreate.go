package shared

type ProjectCreate struct {
	Description *string         `json:"description,omitempty"`
	Funding     *string         `json:"funding,omitempty"`
	FundingList []FundingCreate `json:"funding_list,omitempty"`
	GroupID     *int64          `json:"group_id,omitempty"`
	Title       string          `json:"title"`
}
