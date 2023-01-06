package shared

type ListDocumentClassifiersResponse struct {
	DocumentClassifierPropertiesList []DocumentClassifierProperties1 `json:"DocumentClassifierPropertiesList,omitempty"`
	NextToken                        *string                         `json:"NextToken,omitempty"`
}
