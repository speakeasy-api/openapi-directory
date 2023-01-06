package shared

type GetDeviceRegistrationResult struct {
	CacheTTL           map[string]interface{} `json:"CacheTTL,omitempty"`
	DeviceRegistration *string                `json:"DeviceRegistration,omitempty"`
}
