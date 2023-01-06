package shared

type ProjectUpdate struct {
	Description *string         `json:"description,omitempty"`
	Funding     *string         `json:"funding,omitempty"`
	FundingList []FundingCreate `json:"funding_list,omitempty"`
	Title       *string         `json:"title,omitempty"`
}
