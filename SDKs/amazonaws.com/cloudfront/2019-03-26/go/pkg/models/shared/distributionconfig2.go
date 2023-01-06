package shared

// DistributionConfig2
// A distribution configuration.
type DistributionConfig2 struct {
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
	Origins              Origins1
	PriceClass           *PriceClassEnum
	Restrictions         *Restrictions
	ViewerCertificate    *ViewerCertificate
	WebACLID             *string
}
