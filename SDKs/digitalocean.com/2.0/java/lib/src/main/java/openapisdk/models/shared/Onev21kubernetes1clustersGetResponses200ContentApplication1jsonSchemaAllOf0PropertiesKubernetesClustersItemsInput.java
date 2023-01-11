package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_upgrade")
    public Boolean autoUpgrade;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withAutoUpgrade(Boolean autoUpgrade) {
        this.autoUpgrade = autoUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenance_policy")
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput maintenancePolicy;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withMaintenancePolicy(Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput maintenancePolicy) {
        this.maintenancePolicy = maintenancePolicy;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_pools")
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput[] nodePools;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withNodePools(Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput[] nodePools) {
        this.nodePools = nodePools;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surge_upgrade")
    public Boolean surgeUpgrade;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withSurgeUpgrade(Boolean surgeUpgrade) {
        this.surgeUpgrade = surgeUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}