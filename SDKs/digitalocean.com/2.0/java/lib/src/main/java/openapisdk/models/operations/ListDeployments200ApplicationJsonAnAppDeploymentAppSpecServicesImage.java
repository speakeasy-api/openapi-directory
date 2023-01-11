package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry")
    public String registry;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage withRegistry(String registry) {
        this.registry = registry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum registryType;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage withRegistryType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum registryType) {
        this.registryType = registryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage withTag(String tag) {
        this.tag = tag;
        return this;
    }
}