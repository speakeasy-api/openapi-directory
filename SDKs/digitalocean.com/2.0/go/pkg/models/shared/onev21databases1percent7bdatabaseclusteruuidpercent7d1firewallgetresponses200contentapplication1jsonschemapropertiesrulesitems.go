package shared

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum string

const (
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnumDroplet Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = "droplet"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnumK8s     Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = "k8s"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnumIPAddr  Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = "ip_addr"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnumTag     Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = "tag"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnumApp     Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = "app"
)

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput struct {
	ClusterUUID *string                                                                                                                                `json:"cluster_uuid,omitempty"`
	Type        Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum `json:"type"`
	UUID        *string                                                                                                                                `json:"uuid,omitempty"`
	Value       string                                                                                                                                 `json:"value"`
}
