package shared

type ArticleProjectCreate struct {
	Authors       []map[string]interface{} `json:"authors,omitempty"`
	Categories    []int64                  `json:"categories,omitempty"`
	CustomFields  map[string]interface{}   `json:"custom_fields,omitempty"`
	DefinedType   *string                  `json:"defined_type,omitempty"`
	Description   *string                  `json:"description,omitempty"`
	Doi           *string                  `json:"doi,omitempty"`
	Funding       *string                  `json:"funding,omitempty"`
	FundingList   []FundingCreate          `json:"funding_list,omitempty"`
	Handle        *string                  `json:"handle,omitempty"`
	Keywords      []string                 `json:"keywords,omitempty"`
	License       *int64                   `json:"license,omitempty"`
	References    []string                 `json:"references,omitempty"`
	ResourceDoi   *string                  `json:"resource_doi,omitempty"`
	ResourceTitle *string                  `json:"resource_title,omitempty"`
	Tags          []string                 `json:"tags,omitempty"`
	Timeline      *TimelineUpdate          `json:"timeline,omitempty"`
	Title         string                   `json:"title"`
}
