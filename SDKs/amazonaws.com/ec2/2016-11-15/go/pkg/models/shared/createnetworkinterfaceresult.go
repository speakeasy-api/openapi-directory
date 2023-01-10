package shared

// CreateNetworkInterfaceResultNetworkInterfaceAssociation
// The association information for an Elastic IP address (IPv4) associated with the network interface.
type CreateNetworkInterfaceResultNetworkInterfaceAssociation struct {
	AllocationID    map[string]interface{}
	AssociationID   map[string]interface{}
	CarrierIP       map[string]interface{}
	CustomerOwnedIP map[string]interface{}
	IPOwnerID       map[string]interface{}
	PublicDNSName   map[string]interface{}
	PublicIP        map[string]interface{}
}

// CreateNetworkInterfaceResultNetworkInterfaceAttachment
// The network interface attachment.
type CreateNetworkInterfaceResultNetworkInterfaceAttachment struct {
	AttachTime          map[string]interface{}
	AttachmentID        map[string]interface{}
	DeleteOnTermination map[string]interface{}
	DeviceIndex         map[string]interface{}
	InstanceID          map[string]interface{}
	InstanceOwnerID     map[string]interface{}
	NetworkCardIndex    map[string]interface{}
	Status              map[string]interface{}
}

// CreateNetworkInterfaceResultNetworkInterface
// Information about the network interface.
type CreateNetworkInterfaceResultNetworkInterface struct {
	Association        *CreateNetworkInterfaceResultNetworkInterfaceAssociation
	Attachment         *CreateNetworkInterfaceResultNetworkInterfaceAttachment
	AvailabilityZone   map[string]interface{}
	Description        map[string]interface{}
	Groups             map[string]interface{}
	InterfaceType      map[string]interface{}
	Ipv4Prefixes       map[string]interface{}
	Ipv6Addresses      map[string]interface{}
	Ipv6Prefixes       map[string]interface{}
	MacAddress         map[string]interface{}
	NetworkInterfaceID map[string]interface{}
	OutpostArn         map[string]interface{}
	OwnerID            map[string]interface{}
	PrivateDNSName     map[string]interface{}
	PrivateIPAddress   map[string]interface{}
	PrivateIPAddresses map[string]interface{}
	RequesterID        map[string]interface{}
	RequesterManaged   map[string]interface{}
	SourceDestCheck    map[string]interface{}
	Status             map[string]interface{}
	SubnetID           map[string]interface{}
	TagSet             map[string]interface{}
	VpcID              map[string]interface{}
}

// CreateNetworkInterfaceResult
// Contains the output of CreateNetworkInterface.
type CreateNetworkInterfaceResult struct {
	ClientToken      map[string]interface{}
	NetworkInterface *CreateNetworkInterfaceResultNetworkInterface
}
