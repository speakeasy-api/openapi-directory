package shared

type DisassociateResourceSharePermissionResponse struct {
	ClientToken *string                `json:"clientToken,omitempty"`
	ReturnValue map[string]interface{} `json:"returnValue,omitempty"`
}
