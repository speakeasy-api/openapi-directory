package shared

import (
	"time"
)

// Distribution1
// The distribution's information.
type Distribution1 struct {
	ARN                           string
	ActiveTrustedSigners          ActiveTrustedSigners
	DistributionConfig            DistributionConfig1
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}
