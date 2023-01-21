package shared

// TargetInstance
// Details on recommended instance.
type TargetInstance struct {
	CurrencyCode                *string                  `json:"CurrencyCode,omitempty"`
	DefaultTargetInstance       *bool                    `json:"DefaultTargetInstance,omitempty"`
	EstimatedMonthlyCost        *string                  `json:"EstimatedMonthlyCost,omitempty"`
	EstimatedMonthlySavings     *string                  `json:"EstimatedMonthlySavings,omitempty"`
	ExpectedResourceUtilization *ResourceUtilization     `json:"ExpectedResourceUtilization,omitempty"`
	PlatformDifferences         []PlatformDifferenceEnum `json:"PlatformDifferences,omitempty"`
	ResourceDetails             *ResourceDetails         `json:"ResourceDetails,omitempty"`
}
