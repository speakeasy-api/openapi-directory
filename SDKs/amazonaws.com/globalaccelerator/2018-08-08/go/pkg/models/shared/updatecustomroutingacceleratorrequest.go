package shared

type UpdateCustomRoutingAcceleratorRequest struct {
	AcceleratorArn map[string]interface{} `json:"AcceleratorArn"`
	Enabled        *bool                  `json:"Enabled,omitempty"`
	IPAddressType  *IPAddressTypeEnum     `json:"IpAddressType,omitempty"`
	Name           *string                `json:"Name,omitempty"`
}
