package shared

type ListSuiteDefinitionsResponse struct {
	NextToken                      *string                `json:"nextToken,omitempty"`
	SuiteDefinitionInformationList map[string]interface{} `json:"suiteDefinitionInformationList,omitempty"`
}
