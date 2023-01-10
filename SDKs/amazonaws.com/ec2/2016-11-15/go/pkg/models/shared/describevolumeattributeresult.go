package shared

// DescribeVolumeAttributeResultAutoEnableIo
// The state of <code>autoEnableIO</code> attribute.
type DescribeVolumeAttributeResultAutoEnableIo struct {
	Value map[string]interface{}
}

type DescribeVolumeAttributeResult struct {
	AutoEnableIO *DescribeVolumeAttributeResultAutoEnableIo
	ProductCodes map[string]interface{}
	VolumeID     map[string]interface{}
}
