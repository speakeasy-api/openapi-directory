package shared

type DescribeTaskDefinitionResponse struct {
	Tags           []Tag            `json:"tags,omitempty"`
	TaskDefinition *TaskDefinition1 `json:"taskDefinition,omitempty"`
}
