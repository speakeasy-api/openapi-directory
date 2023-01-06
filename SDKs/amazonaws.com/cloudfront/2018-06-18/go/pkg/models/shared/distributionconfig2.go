package shared

// DistributionConfig2
// A distribution configuration.
type DistributionConfig2 struct {
	Aliases              *Aliases
	CacheBehaviors       *CacheBehaviors
	CallerReference      string
	Comment              string
	CustomErrorResponses *CustomErrorResponses1
	DefaultCacheBehavior DefaultCacheBehavior
	DefaultRootObject    *string
	Enabled              bool
	HTTPVersion          *HTTPVersionEnum
	IsIpv6Enabled        *bool
	Logging              *LoggingConfig
	Origins              Origins
	PriceClass           *PriceClassEnum
	Restrictions         *Restrictions
	ViewerCertificate    *ViewerCertificate1
	WebACLID             *string
}
