package shared

// RedshiftInstanceDetails
// Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase.
type RedshiftInstanceDetails struct {
	CurrentGeneration *bool   `json:"CurrentGeneration,omitempty"`
	Family            *string `json:"Family,omitempty"`
	NodeType          *string `json:"NodeType,omitempty"`
	Region            *string `json:"Region,omitempty"`
	SizeFlexEligible  *bool   `json:"SizeFlexEligible,omitempty"`
}
