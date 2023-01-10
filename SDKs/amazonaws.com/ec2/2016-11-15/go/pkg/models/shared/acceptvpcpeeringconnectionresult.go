package shared

// AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
// Information about the VPC peering connection options for the accepter or requester VPC.
type AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions struct {
	AllowDNSResolutionFromRemoteVpc            map[string]interface{}
	AllowEgressFromLocalClassicLinkToRemoteVpc map[string]interface{}
	AllowEgressFromLocalVpcToRemoteClassicLink map[string]interface{}
}

// AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
// Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
type AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo struct {
	CidrBlock        map[string]interface{}
	CidrBlockSet     map[string]interface{}
	Ipv6CidrBlockSet map[string]interface{}
	OwnerID          map[string]interface{}
	PeeringOptions   *AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
	Region           map[string]interface{}
	VpcID            map[string]interface{}
}

// AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
// Information about the VPC peering connection options for the accepter or requester VPC.
type AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions struct {
	AllowDNSResolutionFromRemoteVpc            map[string]interface{}
	AllowEgressFromLocalClassicLinkToRemoteVpc map[string]interface{}
	AllowEgressFromLocalVpcToRemoteClassicLink map[string]interface{}
}

// AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
// Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
type AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo struct {
	CidrBlock        map[string]interface{}
	CidrBlockSet     map[string]interface{}
	Ipv6CidrBlockSet map[string]interface{}
	OwnerID          map[string]interface{}
	PeeringOptions   *AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
	Region           map[string]interface{}
	VpcID            map[string]interface{}
}

// AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus
// The status of the VPC peering connection.
type AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// AcceptVpcPeeringConnectionResultVpcPeeringConnection
// Information about the VPC peering connection.
type AcceptVpcPeeringConnectionResultVpcPeeringConnection struct {
	AccepterVpcInfo        *AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
	ExpirationTime         map[string]interface{}
	RequesterVpcInfo       *AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
	Status                 *AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus
	Tags                   map[string]interface{}
	VpcPeeringConnectionID map[string]interface{}
}

type AcceptVpcPeeringConnectionResult struct {
	VpcPeeringConnection *AcceptVpcPeeringConnectionResultVpcPeeringConnection
}
