package shared

type RemoveAllBackendsResponse struct {
	AppID     map[string]interface{} `json:"AppId,omitempty"`
	Error     map[string]interface{} `json:"Error,omitempty"`
	JobID     map[string]interface{} `json:"JobId,omitempty"`
	Operation map[string]interface{} `json:"Operation,omitempty"`
	Status    map[string]interface{} `json:"Status,omitempty"`
}
