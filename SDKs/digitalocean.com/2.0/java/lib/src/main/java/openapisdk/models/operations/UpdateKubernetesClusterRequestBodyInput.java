package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateKubernetesClusterRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_upgrade")
    public Boolean autoUpgrade;
    public UpdateKubernetesClusterRequestBodyInput withAutoUpgrade(Boolean autoUpgrade) {
        this.autoUpgrade = autoUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenance_policy")
    public openapisdk.models.shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyInput maintenancePolicy;
    public UpdateKubernetesClusterRequestBodyInput withMaintenancePolicy(openapisdk.models.shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyInput maintenancePolicy) {
        this.maintenancePolicy = maintenancePolicy;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateKubernetesClusterRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surge_upgrade")
    public Boolean surgeUpgrade;
    public UpdateKubernetesClusterRequestBodyInput withSurgeUpgrade(Boolean surgeUpgrade) {
        this.surgeUpgrade = surgeUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateKubernetesClusterRequestBodyInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}