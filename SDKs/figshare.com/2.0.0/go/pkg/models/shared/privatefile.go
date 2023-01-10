package shared

type PrivateFile struct {
	ComputedMd5  *string `json:"computed_md5,omitempty"`
	DownloadURL  *string `json:"download_url,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	IsLinkOnly   *bool   `json:"is_link_only,omitempty"`
	Name         *string `json:"name,omitempty"`
	PreviewState *string `json:"preview_state,omitempty"`
	Size         *int64  `json:"size,omitempty"`
	Status       *string `json:"status,omitempty"`
	SuppliedMd5  *string `json:"supplied_md5,omitempty"`
	UploadToken  *string `json:"upload_token,omitempty"`
	UploadURL    *string `json:"upload_url,omitempty"`
	ViewerType   *string `json:"viewer_type,omitempty"`
}
