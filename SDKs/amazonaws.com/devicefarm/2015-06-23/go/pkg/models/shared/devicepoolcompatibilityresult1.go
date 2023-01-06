package shared

// DevicePoolCompatibilityResult1
// Represents a device pool compatibility result.
type DevicePoolCompatibilityResult1 struct {
	Compatible              *bool                    `json:"compatible,omitempty"`
	Device                  *Device                  `json:"device,omitempty"`
	IncompatibilityMessages []IncompatibilityMessage `json:"incompatibilityMessages,omitempty"`
}
