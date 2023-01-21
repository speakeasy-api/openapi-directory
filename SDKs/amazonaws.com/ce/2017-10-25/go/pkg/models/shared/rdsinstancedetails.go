package shared

// RdsInstanceDetails
// Details about the Amazon RDS instances that Amazon Web Services recommends that you purchase.
type RdsInstanceDetails struct {
	CurrentGeneration *bool   `json:"CurrentGeneration,omitempty"`
	DatabaseEdition   *string `json:"DatabaseEdition,omitempty"`
	DatabaseEngine    *string `json:"DatabaseEngine,omitempty"`
	DeploymentOption  *string `json:"DeploymentOption,omitempty"`
	Family            *string `json:"Family,omitempty"`
	InstanceType      *string `json:"InstanceType,omitempty"`
	LicenseModel      *string `json:"LicenseModel,omitempty"`
	Region            *string `json:"Region,omitempty"`
	SizeFlexEligible  *bool   `json:"SizeFlexEligible,omitempty"`
}
