package shared

import (
	"time"
)

// UpdateStreamingDistributionResultStreamingDistribution
// A streaming distribution.
type UpdateStreamingDistributionResultStreamingDistribution struct {
	ARN                         string
	ActiveTrustedSigners        ActiveTrustedSigners
	DomainName                  string
	ID                          string
	LastModifiedTime            *time.Time
	Status                      string
	StreamingDistributionConfig StreamingDistributionConfig
}

// UpdateStreamingDistributionResult
// The returned result of the corresponding request.
type UpdateStreamingDistributionResult struct {
	StreamingDistribution *UpdateStreamingDistributionResultStreamingDistribution
}
