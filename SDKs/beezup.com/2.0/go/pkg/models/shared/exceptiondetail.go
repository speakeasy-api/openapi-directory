package shared

type ExceptionDetail struct {
	HelpLink   *string `json:"helpLink,omitempty"`
	Message    *string `json:"message,omitempty"`
	StackTrace *string `json:"stackTrace,omitempty"`
	Type       *string `json:"type,omitempty"`
}
