package shared

// InstanceAttribute
// Describes an instance attribute.
type InstanceAttribute struct {
	BlockDeviceMappings               map[string]interface{}
	DisableAPITermination             map[string]interface{}
	EbsOptimized                      map[string]interface{}
	EnaSupport                        map[string]interface{}
	EnclaveOptions                    map[string]interface{}
	Groups                            map[string]interface{}
	InstanceID                        map[string]interface{}
	InstanceInitiatedShutdownBehavior map[string]interface{}
	InstanceType                      map[string]interface{}
	KernelID                          map[string]interface{}
	ProductCodes                      map[string]interface{}
	RamdiskID                         map[string]interface{}
	RootDeviceName                    map[string]interface{}
	SourceDestCheck                   map[string]interface{}
	SriovNetSupport                   map[string]interface{}
	UserData                          map[string]interface{}
}
