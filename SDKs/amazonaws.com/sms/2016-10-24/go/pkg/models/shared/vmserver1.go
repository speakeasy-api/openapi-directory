package shared

// VMServer1
// Represents a VM server.
type VMServer1 struct {
	VMManagerName   *string                `json:"vmManagerName,omitempty"`
	VMManagerType   map[string]interface{} `json:"vmManagerType,omitempty"`
	VMName          *string                `json:"vmName,omitempty"`
	VMPath          *string                `json:"vmPath,omitempty"`
	VMServerAddress *VMServerAddress       `json:"vmServerAddress,omitempty"`
}
