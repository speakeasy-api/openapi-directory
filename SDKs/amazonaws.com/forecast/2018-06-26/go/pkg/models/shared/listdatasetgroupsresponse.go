package shared

type ListDatasetGroupsResponse struct {
	DatasetGroups map[string]interface{} `json:"DatasetGroups,omitempty"`
	NextToken     *string                `json:"NextToken,omitempty"`
}
