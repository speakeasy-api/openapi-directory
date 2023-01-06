package shared

// DefaultCacheBehavior1
// A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
type DefaultCacheBehavior1 struct {
	AllowedMethods             *AllowedMethods
	Compress                   *bool
	DefaultTTL                 *int64
	FieldLevelEncryptionID     *string
	ForwardedValues            ForwardedValues
	LambdaFunctionAssociations *LambdaFunctionAssociations
	MaxTTL                     *int64
	MinTTL                     int64
	SmoothStreaming            *bool
	TargetOriginID             string
	TrustedSigners             TrustedSigners1
	ViewerProtocolPolicy       ViewerProtocolPolicyEnum
}
