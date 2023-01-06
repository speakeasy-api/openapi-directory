package shared

import (
	"time"
)

// Distribution2
// A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
type Distribution2 struct {
	ARN                           string
	ActiveTrustedSigners          ActiveTrustedSigners
	AliasICPRecordals             []map[string]interface{}
	DistributionConfig            DistributionConfig3
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}
