package shared

// CreateNetworkACLResultNetworkACL
// Information about the network ACL.
type CreateNetworkACLResultNetworkACL struct {
	Associations map[string]interface{}
	Entries      map[string]interface{}
	IsDefault    map[string]interface{}
	NetworkACLID map[string]interface{}
	OwnerID      map[string]interface{}
	Tags         map[string]interface{}
	VpcID        map[string]interface{}
}

type CreateNetworkACLResult struct {
	NetworkACL *CreateNetworkACLResultNetworkACL
}
