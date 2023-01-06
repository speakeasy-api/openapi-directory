package shared

type FundingInformation struct {
	FunderName    *string `json:"funder_name,omitempty"`
	GrantCode     *string `json:"grant_code,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	IsUserDefined *bool   `json:"is_user_defined,omitempty"`
	Title         *string `json:"title,omitempty"`
	URL           *string `json:"url,omitempty"`
}
