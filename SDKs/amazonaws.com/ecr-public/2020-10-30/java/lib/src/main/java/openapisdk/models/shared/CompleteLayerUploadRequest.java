package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompleteLayerUploadRequest {
    @JsonProperty("layerDigests")
    public String[] layerDigests;
    public CompleteLayerUploadRequest withLayerDigests(String[] layerDigests) {
        this.layerDigests = layerDigests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public CompleteLayerUploadRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CompleteLayerUploadRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("uploadId")
    public String uploadId;
    public CompleteLayerUploadRequest withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}