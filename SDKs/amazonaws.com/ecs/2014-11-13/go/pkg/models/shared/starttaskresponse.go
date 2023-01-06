package shared

type StartTaskResponse struct {
	Failures map[string]interface{} `json:"failures,omitempty"`
	Tasks    []Task                 `json:"tasks,omitempty"`
}
