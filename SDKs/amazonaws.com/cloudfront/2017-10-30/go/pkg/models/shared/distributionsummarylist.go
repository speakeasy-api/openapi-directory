package shared

import (
	"time"
)

// DistributionSummaryList
// A summary of the information about a CloudFront distribution.
type DistributionSummaryList struct {
	ARN                  string
	Aliases              Aliases
	CacheBehaviors       CacheBehaviors
	Comment              string
	CustomErrorResponses CustomErrorResponses
	DefaultCacheBehavior DefaultCacheBehavior
	DomainName           string
	Enabled              bool
	HTTPVersion          HTTPVersionEnum
	ID                   string
	IsIpv6Enabled        bool
	LastModifiedTime     time.Time
	Origins              Origins
	PriceClass           PriceClassEnum
	Restrictions         Restrictions
	Status               string
	ViewerCertificate    ViewerCertificate
	WebACLID             string
}
