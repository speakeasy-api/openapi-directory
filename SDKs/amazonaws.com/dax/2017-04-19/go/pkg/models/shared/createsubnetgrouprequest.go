package shared

type CreateSubnetGroupRequest struct {
	Description     map[string]interface{} `json:"Description,omitempty"`
	SubnetGroupName string                 `json:"SubnetGroupName"`
	SubnetIds       []string               `json:"SubnetIds"`
}
