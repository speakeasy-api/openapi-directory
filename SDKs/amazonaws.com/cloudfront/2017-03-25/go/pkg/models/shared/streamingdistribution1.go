package shared

import (
	"time"
)

// StreamingDistribution1
// A streaming distribution.
type StreamingDistribution1 struct {
	ARN                         string
	ActiveTrustedSigners        ActiveTrustedSigners1
	DomainName                  string
	ID                          string
	LastModifiedTime            *time.Time
	Status                      string
	StreamingDistributionConfig StreamingDistributionConfig
}
