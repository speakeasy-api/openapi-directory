package shared

type GetResourceLfTagsRequest struct {
	CatalogID          *string  `json:"CatalogId,omitempty"`
	Resource           Resource `json:"Resource"`
	ShowAssignedLFTags *bool    `json:"ShowAssignedLFTags,omitempty"`
}
