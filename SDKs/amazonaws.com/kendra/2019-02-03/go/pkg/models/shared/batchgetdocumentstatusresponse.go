package shared

type BatchGetDocumentStatusResponse struct {
	DocumentStatusList []Status                              `json:"DocumentStatusList,omitempty"`
	Errors             []BatchGetDocumentStatusResponseError `json:"Errors,omitempty"`
}
