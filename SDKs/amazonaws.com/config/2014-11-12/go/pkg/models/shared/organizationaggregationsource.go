package shared

// OrganizationAggregationSource
// This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
type OrganizationAggregationSource struct {
	AllAwsRegions *bool                  `json:"AllAwsRegions,omitempty"`
	AwsRegions    map[string]interface{} `json:"AwsRegions,omitempty"`
	RoleArn       string                 `json:"RoleArn"`
}
