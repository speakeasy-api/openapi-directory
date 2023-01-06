package shared

// DistributionConfig3
// A distribution configuration.
type DistributionConfig3 struct {
	Aliases              *Aliases
	CacheBehaviors       *CacheBehaviors
	CallerReference      string
	Comment              string
	CustomErrorResponses *CustomErrorResponses
	DefaultCacheBehavior DefaultCacheBehavior2
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
