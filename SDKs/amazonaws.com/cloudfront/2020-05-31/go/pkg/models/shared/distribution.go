package shared

import (
	"time"
)

// Distribution
// A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
type Distribution struct {
	ARN                           string
	ActiveTrustedKeyGroups        *ActiveTrustedKeyGroups
	ActiveTrustedSigners          *ActiveTrustedSigners
	AliasICPRecordals             []map[string]interface{}
	DistributionConfig            DistributionConfig
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}
