package shared

// OnDeviceServiceConfiguration
// An object that represents metadata and configuration settings for services on an AWS Snow Family device.
type OnDeviceServiceConfiguration struct {
	NFSOnDeviceService *NfsOnDeviceServiceConfiguration `json:"NFSOnDeviceService,omitempty"`
}
