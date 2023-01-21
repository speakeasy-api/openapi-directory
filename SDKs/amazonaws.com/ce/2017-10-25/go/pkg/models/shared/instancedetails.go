package shared

// InstanceDetails
// Details about the instances that Amazon Web Services recommends that you purchase.
type InstanceDetails struct {
	Ec2InstanceDetails         *Ec2InstanceDetails         `json:"EC2InstanceDetails,omitempty"`
	ESInstanceDetails          *EsInstanceDetails          `json:"ESInstanceDetails,omitempty"`
	ElastiCacheInstanceDetails *ElastiCacheInstanceDetails `json:"ElastiCacheInstanceDetails,omitempty"`
	RDSInstanceDetails         *RdsInstanceDetails         `json:"RDSInstanceDetails,omitempty"`
	RedshiftInstanceDetails    *RedshiftInstanceDetails    `json:"RedshiftInstanceDetails,omitempty"`
}
