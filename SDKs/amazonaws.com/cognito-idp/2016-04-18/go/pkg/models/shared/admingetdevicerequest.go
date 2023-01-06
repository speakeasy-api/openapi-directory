package shared

// AdminGetDeviceRequest
// Represents the request to get the device, as an administrator.
type AdminGetDeviceRequest struct {
	DeviceKey  string                 `json:"DeviceKey"`
	UserPoolID map[string]interface{} `json:"UserPoolId"`
	Username   string                 `json:"Username"`
}
