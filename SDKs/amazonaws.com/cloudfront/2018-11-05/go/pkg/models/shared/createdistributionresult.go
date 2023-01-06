package shared

import (
	"time"
)

// CreateDistributionResultDistribution
// The distribution's information.
type CreateDistributionResultDistribution struct {
	ARN                           string
	ActiveTrustedSigners          ActiveTrustedSigners
	DistributionConfig            DistributionConfig
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}

// CreateDistributionResult
// The returned result of the corresponding request.
type CreateDistributionResult struct {
	Distribution *CreateDistributionResultDistribution
}
