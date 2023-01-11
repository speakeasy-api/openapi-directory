package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadLayerPartRequest {
    @JsonProperty("layerPartBlob")
    public String layerPartBlob;
    public UploadLayerPartRequest withLayerPartBlob(String layerPartBlob) {
        this.layerPartBlob = layerPartBlob;
        return this;
    }
    @JsonProperty("partFirstByte")
    public Long partFirstByte;
    public UploadLayerPartRequest withPartFirstByte(Long partFirstByte) {
        this.partFirstByte = partFirstByte;
        return this;
    }
    @JsonProperty("partLastByte")
    public Long partLastByte;
    public UploadLayerPartRequest withPartLastByte(Long partLastByte) {
        this.partLastByte = partLastByte;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public UploadLayerPartRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public UploadLayerPartRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("uploadId")
    public String uploadId;
    public UploadLayerPartRequest withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}