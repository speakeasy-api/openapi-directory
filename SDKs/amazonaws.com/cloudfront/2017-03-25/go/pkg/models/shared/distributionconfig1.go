package shared

// DistributionConfig1
// A distribution configuration.
type DistributionConfig1 struct {
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
	Origins              Origins
	PriceClass           *PriceClassEnum
	Restrictions         *Restrictions
	ViewerCertificate    *ViewerCertificate
	WebACLID             *string
}
