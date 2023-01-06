package shared

type AddLfTagsToResourceRequest struct {
	CatalogID *string     `json:"CatalogId,omitempty"`
	LFTags    []LfTagPair `json:"LFTags"`
	Resource  Resource    `json:"Resource"`
}
