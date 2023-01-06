package shared

type UserErrorMessage struct {
	Arguments   map[string]map[string]interface{} `json:"arguments,omitempty"`
	Code        string                            `json:"code"`
	CultureName *string                           `json:"cultureName,omitempty"`
	DocURL      *string                           `json:"docUrl,omitempty"`
	Message     string                            `json:"message"`
}
