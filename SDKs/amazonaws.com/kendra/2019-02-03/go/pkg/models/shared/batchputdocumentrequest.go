package shared

type BatchPutDocumentRequest struct {
	Documents []Document `json:"Documents"`
	IndexID   string     `json:"IndexId"`
	RoleArn   *string    `json:"RoleArn,omitempty"`
}
