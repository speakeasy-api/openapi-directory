package shared

type CreateFaqRequest struct {
	ClientToken *string            `json:"ClientToken,omitempty"`
	Description *string            `json:"Description,omitempty"`
	FileFormat  *FaqFileFormatEnum `json:"FileFormat,omitempty"`
	IndexID     string             `json:"IndexId"`
	Name        string             `json:"Name"`
	RoleArn     string             `json:"RoleArn"`
	S3Path      S3Path             `json:"S3Path"`
	Tags        []Tag              `json:"Tags,omitempty"`
}
