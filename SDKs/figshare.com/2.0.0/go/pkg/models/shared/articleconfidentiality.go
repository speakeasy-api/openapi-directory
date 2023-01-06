package shared

type ArticleConfidentiality struct {
	IsConfidential *bool   `json:"is_confidential,omitempty"`
	Reason         *string `json:"reason,omitempty"`
}
