package shared

// ImageAttribute
// Describes an image attribute.
type ImageAttribute struct {
	BlockDeviceMappings map[string]interface{}
	BootMode            map[string]interface{}
	Description         map[string]interface{}
	ImageID             map[string]interface{}
	KernelID            map[string]interface{}
	LaunchPermissions   map[string]interface{}
	ProductCodes        map[string]interface{}
	RamdiskID           map[string]interface{}
	SriovNetSupport     map[string]interface{}
}
