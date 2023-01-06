package shared

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumAny       Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "any"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumMonday    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "monday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumTuesday   Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "tuesday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumWednesday Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "wednesday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumThursday  Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "thursday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumFriday    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "friday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumSaturday  Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "saturday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumSunday    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "sunday"
)

// Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput
// An object specifying the maintenance window policy for the Kubernetes cluster.
type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput struct {
	Day       *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum `json:"day,omitempty"`
	StartTime *string                                                                                                                               `json:"start_time,omitempty"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnumNoSchedule       Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum = "NoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnumPreferNoSchedule Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum = "PreferNoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnumNoExecute        Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum = "NoExecute"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints struct {
	Effect *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum `json:"effect,omitempty"`
	Key    *string                                                                                                                                `json:"key,omitempty"`
	Value  *string                                                                                                                                `json:"value,omitempty"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput struct {
	AutoScale *bool                                                                                                                         `json:"auto_scale,omitempty"`
	Count     int64                                                                                                                         `json:"count"`
	Labels    map[string]interface{}                                                                                                        `json:"labels,omitempty"`
	MaxNodes  *int64                                                                                                                        `json:"max_nodes,omitempty"`
	MinNodes  *int64                                                                                                                        `json:"min_nodes,omitempty"`
	Name      string                                                                                                                        `json:"name"`
	Tags      []string                                                                                                                      `json:"tags,omitempty"`
	Taints    []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints `json:"taints,omitempty"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput struct {
	AutoUpgrade       *bool                                                                                                                               `json:"auto_upgrade,omitempty"`
	MaintenancePolicy *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput `json:"maintenance_policy,omitempty"`
	Name              string                                                                                                                              `json:"name"`
	NodePools         []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput        `json:"node_pools"`
	Region            string                                                                                                                              `json:"region"`
	SurgeUpgrade      *bool                                                                                                                               `json:"surge_upgrade,omitempty"`
	Tags              []string                                                                                                                            `json:"tags,omitempty"`
	Version           string                                                                                                                              `json:"version"`
	VpcUUID           *string                                                                                                                             `json:"vpc_uuid,omitempty"`
}
