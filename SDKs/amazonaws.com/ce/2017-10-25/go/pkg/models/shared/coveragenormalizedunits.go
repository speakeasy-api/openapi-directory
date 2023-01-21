package shared

// CoverageNormalizedUnits
// <p>The amount of instance usage, in normalized units. You can use normalized units to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose that you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. When you use normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p>
type CoverageNormalizedUnits struct {
	CoverageNormalizedUnitsPercentage *string `json:"CoverageNormalizedUnitsPercentage,omitempty"`
	OnDemandNormalizedUnits           *string `json:"OnDemandNormalizedUnits,omitempty"`
	ReservedNormalizedUnits           *string `json:"ReservedNormalizedUnits,omitempty"`
	TotalRunningNormalizedUnits       *string `json:"TotalRunningNormalizedUnits,omitempty"`
}
