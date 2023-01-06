package shared

import (
	"time"
)

// StreamingDistribution1
// A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
type StreamingDistribution1 struct {
	ARN                         string
	ActiveTrustedSigners        ActiveTrustedSigners1
	DomainName                  string
	ID                          string
	LastModifiedTime            *time.Time
	Status                      string
	StreamingDistributionConfig StreamingDistributionConfig
}
