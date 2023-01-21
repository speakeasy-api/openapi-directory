package shared

type UpdateThesaurusRequest struct {
	Description  *string `json:"Description,omitempty"`
	ID           string  `json:"Id"`
	IndexID      string  `json:"IndexId"`
	Name         *string `json:"Name,omitempty"`
	RoleArn      *string `json:"RoleArn,omitempty"`
	SourceS3Path *S3Path `json:"SourceS3Path,omitempty"`
}
