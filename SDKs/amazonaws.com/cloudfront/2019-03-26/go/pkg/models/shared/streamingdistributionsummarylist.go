package shared

import (
	"time"
)

// StreamingDistributionSummaryList
//
//	A summary of the information for a CloudFront streaming distribution.
type StreamingDistributionSummaryList struct {
	ARN              string
	Aliases          Aliases
	Comment          string
	DomainName       string
	Enabled          bool
	ID               string
	LastModifiedTime time.Time
	PriceClass       PriceClassEnum
	S3Origin         S3Origin
	Status           string
	TrustedSigners   TrustedSigners
}
