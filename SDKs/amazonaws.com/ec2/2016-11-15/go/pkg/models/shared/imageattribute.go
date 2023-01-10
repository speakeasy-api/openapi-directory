package shared

// ImageAttributeBootMode
// Describes a value for a resource attribute that is a String.
type ImageAttributeBootMode struct {
	Value map[string]interface{}
}

// ImageAttributeDescription
// A description for the AMI.
type ImageAttributeDescription struct {
	Value map[string]interface{}
}

// ImageAttributeKernelID
// The kernel ID.
type ImageAttributeKernelID struct {
	Value map[string]interface{}
}

// ImageAttributeRamdiskID
// The RAM disk ID.
type ImageAttributeRamdiskID struct {
	Value map[string]interface{}
}

// ImageAttributeSriovNetSupport
// Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
type ImageAttributeSriovNetSupport struct {
	Value map[string]interface{}
}

// ImageAttribute
// Describes an image attribute.
type ImageAttribute struct {
	BlockDeviceMappings map[string]interface{}
	BootMode            *ImageAttributeBootMode
	Description         *ImageAttributeDescription
	ImageID             map[string]interface{}
	KernelID            *ImageAttributeKernelID
	LaunchPermissions   map[string]interface{}
	ProductCodes        map[string]interface{}
	RamdiskID           *ImageAttributeRamdiskID
	SriovNetSupport     *ImageAttributeSriovNetSupport
}
