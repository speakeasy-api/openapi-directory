package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompleteLayerUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerDigest")
    public String layerDigest;
    public CompleteLayerUploadResponse withLayerDigest(String layerDigest) {
        this.layerDigest = layerDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public CompleteLayerUploadResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CompleteLayerUploadResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadId")
    public String uploadId;
    public CompleteLayerUploadResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}