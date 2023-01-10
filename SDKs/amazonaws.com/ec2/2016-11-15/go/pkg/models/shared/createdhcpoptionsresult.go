package shared

// CreateDhcpOptionsResultDhcpOptions
// A set of DHCP options.
type CreateDhcpOptionsResultDhcpOptions struct {
	DhcpConfigurations map[string]interface{}
	DhcpOptionsID      map[string]interface{}
	OwnerID            map[string]interface{}
	Tags               map[string]interface{}
}

type CreateDhcpOptionsResult struct {
	DhcpOptions *CreateDhcpOptionsResultDhcpOptions
}
