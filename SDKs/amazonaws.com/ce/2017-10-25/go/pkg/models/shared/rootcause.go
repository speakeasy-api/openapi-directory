package shared

// RootCause
// The combination of Amazon Web Services service, linked account, Region, and usage type where a cost anomaly is observed.
type RootCause struct {
	LinkedAccount *string `json:"LinkedAccount,omitempty"`
	Region        *string `json:"Region,omitempty"`
	Service       *string `json:"Service,omitempty"`
	UsageType     *string `json:"UsageType,omitempty"`
}
