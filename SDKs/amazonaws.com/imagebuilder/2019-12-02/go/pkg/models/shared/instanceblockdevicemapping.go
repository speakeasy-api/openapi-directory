package shared

// InstanceBlockDeviceMapping
// Defines block device mappings for the instance used to configure your image.
type InstanceBlockDeviceMapping struct {
	DeviceName  map[string]interface{}               `json:"deviceName,omitempty"`
	Ebs         *EbsInstanceBlockDeviceSpecification `json:"ebs,omitempty"`
	NoDevice    *string                              `json:"noDevice,omitempty"`
	VirtualName *string                              `json:"virtualName,omitempty"`
}
