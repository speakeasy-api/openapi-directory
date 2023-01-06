package shared

// DefaultCacheBehavior
// A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
type DefaultCacheBehavior struct {
	AllowedMethods             *AllowedMethods
	CachePolicyID              *string
	Compress                   *bool
	DefaultTTL                 map[string]interface{}
	FieldLevelEncryptionID     *string
	ForwardedValues            map[string]interface{}
	FunctionAssociations       *FunctionAssociations
	LambdaFunctionAssociations *LambdaFunctionAssociations
	MaxTTL                     map[string]interface{}
	MinTTL                     map[string]interface{}
	OriginRequestPolicyID      *string
	RealtimeLogConfigArn       *string
	SmoothStreaming            *bool
	TargetOriginID             string
	TrustedKeyGroups           *TrustedKeyGroups
	TrustedSigners             *TrustedSigners
	ViewerProtocolPolicy       ViewerProtocolPolicyEnum
}
