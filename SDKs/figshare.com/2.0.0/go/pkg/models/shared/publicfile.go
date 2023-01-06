package shared

type PublicFile struct {
	ComputedMd5 *string `json:"computed_md5,omitempty"`
	DownloadURL *string `json:"download_url,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	IsLinkOnly  *bool   `json:"is_link_only,omitempty"`
	Name        *string `json:"name,omitempty"`
	Size        *int64  `json:"size,omitempty"`
	SuppliedMd5 *string `json:"supplied_md5,omitempty"`
}
