package shared

type ListTextTranslationJobsResponse struct {
	NextToken                        *string                         `json:"NextToken,omitempty"`
	TextTranslationJobPropertiesList []TextTranslationJobProperties1 `json:"TextTranslationJobPropertiesList,omitempty"`
}
