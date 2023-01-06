package shared

type FileSystemPolicyDescription struct {
	FileSystemID *string                `json:"FileSystemId,omitempty"`
	Policy       map[string]interface{} `json:"Policy,omitempty"`
}
