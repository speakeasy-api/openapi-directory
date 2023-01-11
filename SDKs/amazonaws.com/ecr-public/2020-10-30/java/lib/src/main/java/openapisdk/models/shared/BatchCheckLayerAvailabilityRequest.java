package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCheckLayerAvailabilityRequest {
    @JsonProperty("layerDigests")
    public String[] layerDigests;
    public BatchCheckLayerAvailabilityRequest withLayerDigests(String[] layerDigests) {
        this.layerDigests = layerDigests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public BatchCheckLayerAvailabilityRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public BatchCheckLayerAvailabilityRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}