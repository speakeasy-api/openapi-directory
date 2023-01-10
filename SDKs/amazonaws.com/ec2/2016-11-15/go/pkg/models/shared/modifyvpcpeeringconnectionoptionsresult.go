package shared

// ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions
// Information about the VPC peering connection options for the accepter VPC.
type ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions struct {
	AllowDNSResolutionFromRemoteVpc            map[string]interface{}
	AllowEgressFromLocalClassicLinkToRemoteVpc map[string]interface{}
	AllowEgressFromLocalVpcToRemoteClassicLink map[string]interface{}
}

// ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions
// Information about the VPC peering connection options for the requester VPC.
type ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions struct {
	AllowDNSResolutionFromRemoteVpc            map[string]interface{}
	AllowEgressFromLocalClassicLinkToRemoteVpc map[string]interface{}
	AllowEgressFromLocalVpcToRemoteClassicLink map[string]interface{}
}

type ModifyVpcPeeringConnectionOptionsResult struct {
	AccepterPeeringConnectionOptions  *ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions
	RequesterPeeringConnectionOptions *ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions
}
