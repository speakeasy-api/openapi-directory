package shared

type RegisterTaskDefinitionResponse struct {
	Tags           []Tag            `json:"tags,omitempty"`
	TaskDefinition *TaskDefinition1 `json:"taskDefinition,omitempty"`
}
