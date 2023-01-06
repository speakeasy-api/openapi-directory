package shared

type SendTaskSuccessInput struct {
	Output    map[string]interface{} `json:"output"`
	TaskToken string                 `json:"taskToken"`
}
