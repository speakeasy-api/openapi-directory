package shared

type CollectionCreate struct {
	Articles        []int64                  `json:"articles,omitempty"`
	Authors         []map[string]interface{} `json:"authors,omitempty"`
	Categories      []int64                  `json:"categories,omitempty"`
	CustomFields    map[string]interface{}   `json:"custom_fields,omitempty"`
	Description     *string                  `json:"description,omitempty"`
	Doi             *string                  `json:"doi,omitempty"`
	Funding         *string                  `json:"funding,omitempty"`
	FundingList     []FundingCreate          `json:"funding_list,omitempty"`
	GroupID         *int64                   `json:"group_id,omitempty"`
	Handle          *string                  `json:"handle,omitempty"`
	Keywords        []string                 `json:"keywords,omitempty"`
	References      []string                 `json:"references,omitempty"`
	ResourceDoi     *string                  `json:"resource_doi,omitempty"`
	ResourceID      *string                  `json:"resource_id,omitempty"`
	ResourceLink    *string                  `json:"resource_link,omitempty"`
	ResourceTitle   *string                  `json:"resource_title,omitempty"`
	ResourceVersion *int64                   `json:"resource_version,omitempty"`
	Tags            []string                 `json:"tags,omitempty"`
	Timeline        *TimelineUpdate          `json:"timeline,omitempty"`
	Title           string                   `json:"title"`
}
