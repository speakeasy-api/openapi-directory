package shared

// InstanceBlockDeviceMapping1
// Defines block device mappings for the instance used to configure your image.
type InstanceBlockDeviceMapping1 struct {
	DeviceName  *string                              `json:"deviceName,omitempty"`
	Ebs         *EbsInstanceBlockDeviceSpecification `json:"ebs,omitempty"`
	NoDevice    *string                              `json:"noDevice,omitempty"`
	VirtualName *string                              `json:"virtualName,omitempty"`
}
