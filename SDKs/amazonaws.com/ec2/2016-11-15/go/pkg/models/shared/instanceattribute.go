package shared

// InstanceAttributeDisableAPITermination
// If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
type InstanceAttributeDisableAPITermination struct {
	Value map[string]interface{}
}

// InstanceAttributeEbsOptimized
// Indicates whether the instance is optimized for Amazon EBS I/O.
type InstanceAttributeEbsOptimized struct {
	Value map[string]interface{}
}

// InstanceAttributeEnaSupport
// Indicates whether enhanced networking with ENA is enabled.
type InstanceAttributeEnaSupport struct {
	Value map[string]interface{}
}

// InstanceAttributeEnclaveOptions
// To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
type InstanceAttributeEnclaveOptions struct {
	Enabled map[string]interface{}
}

// InstanceAttributeInstanceInitiatedShutdownBehavior
// Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
type InstanceAttributeInstanceInitiatedShutdownBehavior struct {
	Value map[string]interface{}
}

// InstanceAttributeInstanceType
// The instance type.
type InstanceAttributeInstanceType struct {
	Value map[string]interface{}
}

// InstanceAttributeKernelID
// The kernel ID.
type InstanceAttributeKernelID struct {
	Value map[string]interface{}
}

// InstanceAttributeRamdiskID
// The RAM disk ID.
type InstanceAttributeRamdiskID struct {
	Value map[string]interface{}
}

// InstanceAttributeRootDeviceName
// The device name of the root device volume (for example, <code>/dev/sda1</code>).
type InstanceAttributeRootDeviceName struct {
	Value map[string]interface{}
}

// InstanceAttributeSourceDestCheck
// Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
type InstanceAttributeSourceDestCheck struct {
	Value map[string]interface{}
}

// InstanceAttributeSriovNetSupport
// Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
type InstanceAttributeSriovNetSupport struct {
	Value map[string]interface{}
}

// InstanceAttributeUserData
// The user data.
type InstanceAttributeUserData struct {
	Value map[string]interface{}
}

// InstanceAttribute
// Describes an instance attribute.
type InstanceAttribute struct {
	BlockDeviceMappings               map[string]interface{}
	DisableAPITermination             *InstanceAttributeDisableAPITermination
	EbsOptimized                      *InstanceAttributeEbsOptimized
	EnaSupport                        *InstanceAttributeEnaSupport
	EnclaveOptions                    *InstanceAttributeEnclaveOptions
	Groups                            map[string]interface{}
	InstanceID                        map[string]interface{}
	InstanceInitiatedShutdownBehavior *InstanceAttributeInstanceInitiatedShutdownBehavior
	InstanceType                      *InstanceAttributeInstanceType
	KernelID                          *InstanceAttributeKernelID
	ProductCodes                      map[string]interface{}
	RamdiskID                         *InstanceAttributeRamdiskID
	RootDeviceName                    *InstanceAttributeRootDeviceName
	SourceDestCheck                   *InstanceAttributeSourceDestCheck
	SriovNetSupport                   *InstanceAttributeSriovNetSupport
	UserData                          *InstanceAttributeUserData
}
