package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDownloadUrlForLayerRequest {
    @JsonProperty("layerDigest")
    public String layerDigest;
    public GetDownloadUrlForLayerRequest withLayerDigest(String layerDigest) {
        this.layerDigest = layerDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public GetDownloadUrlForLayerRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetDownloadUrlForLayerRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}