package shared

type CreateVpcLinkResponse struct {
	CreatedDate          map[string]interface{} `json:"CreatedDate,omitempty"`
	Name                 map[string]interface{} `json:"Name,omitempty"`
	SecurityGroupIds     map[string]interface{} `json:"SecurityGroupIds,omitempty"`
	SubnetIds            map[string]interface{} `json:"SubnetIds,omitempty"`
	Tags                 map[string]string      `json:"Tags,omitempty"`
	VpcLinkID            map[string]interface{} `json:"VpcLinkId,omitempty"`
	VpcLinkStatus        map[string]interface{} `json:"VpcLinkStatus,omitempty"`
	VpcLinkStatusMessage map[string]interface{} `json:"VpcLinkStatusMessage,omitempty"`
	VpcLinkVersion       map[string]interface{} `json:"VpcLinkVersion,omitempty"`
}
