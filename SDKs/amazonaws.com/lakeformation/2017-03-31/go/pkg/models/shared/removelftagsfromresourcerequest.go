package shared

type RemoveLfTagsFromResourceRequest struct {
	CatalogID *string     `json:"CatalogId,omitempty"`
	LFTags    []LfTagPair `json:"LFTags"`
	Resource  Resource    `json:"Resource"`
}
