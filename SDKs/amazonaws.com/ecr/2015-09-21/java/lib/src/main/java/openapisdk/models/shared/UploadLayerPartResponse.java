package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadLayerPartResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastByteReceived")
    public Long lastByteReceived;
    public UploadLayerPartResponse withLastByteReceived(Long lastByteReceived) {
        this.lastByteReceived = lastByteReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public UploadLayerPartResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public UploadLayerPartResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadId")
    public String uploadId;
    public UploadLayerPartResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}