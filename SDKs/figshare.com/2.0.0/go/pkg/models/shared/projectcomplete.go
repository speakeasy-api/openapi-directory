package shared

type ProjectComplete struct {
	Collaborators []Collaborator       `json:"collaborators,omitempty"`
	Description   *string              `json:"description,omitempty"`
	FigshareURL   *string              `json:"figshare_url,omitempty"`
	Funding       *string              `json:"funding,omitempty"`
	FundingList   []FundingInformation `json:"funding_list,omitempty"`
	ID            *int64               `json:"id,omitempty"`
	PublishedDate *string              `json:"published_date,omitempty"`
	Title         *string              `json:"title,omitempty"`
	URL           *string              `json:"url,omitempty"`
}
