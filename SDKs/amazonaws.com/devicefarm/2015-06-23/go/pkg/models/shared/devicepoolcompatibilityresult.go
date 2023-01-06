package shared

// DevicePoolCompatibilityResult
// Represents a device pool compatibility result.
type DevicePoolCompatibilityResult struct {
	Compatible              map[string]interface{}   `json:"compatible,omitempty"`
	Device                  *Device                  `json:"device,omitempty"`
	IncompatibilityMessages []IncompatibilityMessage `json:"incompatibilityMessages,omitempty"`
}
