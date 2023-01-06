package shared

// DefaultCacheBehavior1
// A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
type DefaultCacheBehavior1 struct {
	AllowedMethods             *AllowedMethods
	Compress                   *bool
	DefaultTTL                 *int64
	FieldLevelEncryptionID     *string
	ForwardedValues            ForwardedValues1
	LambdaFunctionAssociations *LambdaFunctionAssociations1
	MaxTTL                     *int64
	MinTTL                     int64
	SmoothStreaming            *bool
	TargetOriginID             string
	TrustedSigners             TrustedSigners
	ViewerProtocolPolicy       ViewerProtocolPolicyEnum
}
