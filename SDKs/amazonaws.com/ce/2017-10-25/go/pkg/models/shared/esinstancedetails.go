package shared

// EsInstanceDetails
// Details about the Amazon ES instances that Amazon Web Services recommends that you purchase.
type EsInstanceDetails struct {
	CurrentGeneration *bool   `json:"CurrentGeneration,omitempty"`
	InstanceClass     *string `json:"InstanceClass,omitempty"`
	InstanceSize      *string `json:"InstanceSize,omitempty"`
	Region            *string `json:"Region,omitempty"`
	SizeFlexEligible  *bool   `json:"SizeFlexEligible,omitempty"`
}
