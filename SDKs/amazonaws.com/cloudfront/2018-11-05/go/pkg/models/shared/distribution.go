package shared

import (
	"time"
)

// DistributionDistributionConfig
// A distribution configuration.
type DistributionDistributionConfig struct {
	Aliases              *Aliases
	CacheBehaviors       *CacheBehaviors
	CallerReference      string
	Comment              string
	CustomErrorResponses *CustomErrorResponses
	DefaultCacheBehavior DefaultCacheBehavior1
	DefaultRootObject    *string
	Enabled              bool
	HTTPVersion          *HTTPVersionEnum
	IsIpv6Enabled        *bool
	Logging              *LoggingConfig
	OriginGroups         *OriginGroups
	Origins              Origins
	PriceClass           *PriceClassEnum
	Restrictions         *Restrictions
	ViewerCertificate    *ViewerCertificate
	WebACLID             *string
}

// Distribution
// The distribution's information.
type Distribution struct {
	ARN                           string
	ActiveTrustedSigners          ActiveTrustedSigners
	DistributionConfig            DistributionDistributionConfig
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}
