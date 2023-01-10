package shared

// CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
// Information about the VPC peering connection options for the accepter or requester VPC.
type CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions struct {
	AllowDNSResolutionFromRemoteVpc            map[string]interface{}
	AllowEgressFromLocalClassicLinkToRemoteVpc map[string]interface{}
	AllowEgressFromLocalVpcToRemoteClassicLink map[string]interface{}
}

// CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
// Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
type CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo struct {
	CidrBlock        map[string]interface{}
	CidrBlockSet     map[string]interface{}
	Ipv6CidrBlockSet map[string]interface{}
	OwnerID          map[string]interface{}
	PeeringOptions   *CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
	Region           map[string]interface{}
	VpcID            map[string]interface{}
}

// CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
// Information about the VPC peering connection options for the accepter or requester VPC.
type CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions struct {
	AllowDNSResolutionFromRemoteVpc            map[string]interface{}
	AllowEgressFromLocalClassicLinkToRemoteVpc map[string]interface{}
	AllowEgressFromLocalVpcToRemoteClassicLink map[string]interface{}
}

// CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
// Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
type CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo struct {
	CidrBlock        map[string]interface{}
	CidrBlockSet     map[string]interface{}
	Ipv6CidrBlockSet map[string]interface{}
	OwnerID          map[string]interface{}
	PeeringOptions   *CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
	Region           map[string]interface{}
	VpcID            map[string]interface{}
}

// CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus
// The status of the VPC peering connection.
type CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// CreateVpcPeeringConnectionResultVpcPeeringConnection
// Information about the VPC peering connection.
type CreateVpcPeeringConnectionResultVpcPeeringConnection struct {
	AccepterVpcInfo        *CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
	ExpirationTime         map[string]interface{}
	RequesterVpcInfo       *CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
	Status                 *CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus
	Tags                   map[string]interface{}
	VpcPeeringConnectionID map[string]interface{}
}

type CreateVpcPeeringConnectionResult struct {
	VpcPeeringConnection *CreateVpcPeeringConnectionResultVpcPeeringConnection
}
