package shared

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnumNoSchedule       Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum = "NoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnumPreferNoSchedule Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum = "PreferNoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnumNoExecute        Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum = "NoExecute"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints struct {
	Effect *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum `json:"effect,omitempty"`
	Key    *string                                                                                                                                               `json:"key,omitempty"`
	Value  *string                                                                                                                                               `json:"value,omitempty"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput struct {
	AutoScale *bool                                                                                                                                        `json:"auto_scale,omitempty"`
	Count     int64                                                                                                                                        `json:"count"`
	Labels    map[string]interface{}                                                                                                                       `json:"labels,omitempty"`
	MaxNodes  *int64                                                                                                                                       `json:"max_nodes,omitempty"`
	MinNodes  *int64                                                                                                                                       `json:"min_nodes,omitempty"`
	Name      string                                                                                                                                       `json:"name"`
	Size      string                                                                                                                                       `json:"size"`
	Tags      []string                                                                                                                                     `json:"tags,omitempty"`
	Taints    []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints `json:"taints,omitempty"`
}
