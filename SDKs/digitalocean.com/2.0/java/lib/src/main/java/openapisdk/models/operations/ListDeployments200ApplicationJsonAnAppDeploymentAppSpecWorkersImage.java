package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry")
    public String registry;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage withRegistry(String registry) {
        this.registry = registry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum registryType;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage withRegistryType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum registryType) {
        this.registryType = registryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage withTag(String tag) {
        this.tag = tag;
        return this;
    }
}