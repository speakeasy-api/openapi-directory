package shared

type CreateQuerySuggestionsBlockListRequest struct {
	ClientToken  *string `json:"ClientToken,omitempty"`
	Description  *string `json:"Description,omitempty"`
	IndexID      string  `json:"IndexId"`
	Name         string  `json:"Name"`
	RoleArn      string  `json:"RoleArn"`
	SourceS3Path S3Path  `json:"SourceS3Path"`
	Tags         []Tag   `json:"Tags,omitempty"`
}
