package shared

// ModifyInstanceMetadataOptionsResultInstanceMetadataOptions
// The metadata options for the instance.
type ModifyInstanceMetadataOptionsResultInstanceMetadataOptions struct {
	HTTPEndpoint            map[string]interface{}
	HTTPProtocolIpv6        map[string]interface{}
	HTTPPutResponseHopLimit map[string]interface{}
	HTTPTokens              map[string]interface{}
	State                   map[string]interface{}
}

type ModifyInstanceMetadataOptionsResult struct {
	InstanceID              map[string]interface{}
	InstanceMetadataOptions *ModifyInstanceMetadataOptionsResultInstanceMetadataOptions
}
