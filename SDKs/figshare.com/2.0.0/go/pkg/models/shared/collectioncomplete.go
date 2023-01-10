package shared

type CollectionComplete struct {
	ArticlesCount   *int64               `json:"articles_count,omitempty"`
	Authors         []Author             `json:"authors,omitempty"`
	Categories      []Category           `json:"categories,omitempty"`
	Citation        *string              `json:"citation,omitempty"`
	CreatedDate     *string              `json:"created_date,omitempty"`
	CustomFields    []CustomArticleField `json:"custom_fields,omitempty"`
	Description     *string              `json:"description,omitempty"`
	Doi             *string              `json:"doi,omitempty"`
	Funding         []FundingInformation `json:"funding,omitempty"`
	GroupID         *int64               `json:"group_id,omitempty"`
	GroupResourceID *string              `json:"group_resource_id,omitempty"`
	Handle          *string              `json:"handle,omitempty"`
	ID              *int64               `json:"id,omitempty"`
	InstitutionID   *int64               `json:"institution_id,omitempty"`
	ModifiedDate    *string              `json:"modified_date,omitempty"`
	Public          *bool                `json:"public,omitempty"`
	PublishedDate   *string              `json:"published_date,omitempty"`
	References      []string             `json:"references,omitempty"`
	ResourceDoi     *string              `json:"resource_doi,omitempty"`
	ResourceID      *string              `json:"resource_id,omitempty"`
	ResourceLink    *string              `json:"resource_link,omitempty"`
	ResourceTitle   *string              `json:"resource_title,omitempty"`
	ResourceVersion *int64               `json:"resource_version,omitempty"`
	Tags            []string             `json:"tags,omitempty"`
	Timeline        *Timeline            `json:"timeline,omitempty"`
	Title           *string              `json:"title,omitempty"`
	URL             *string              `json:"url,omitempty"`
	Version         *int64               `json:"version,omitempty"`
}
