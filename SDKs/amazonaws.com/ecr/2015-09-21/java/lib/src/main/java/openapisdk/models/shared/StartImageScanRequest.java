package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImageScanRequest {
    @JsonProperty("imageId")
    public ImageIdentifier imageId;
    public StartImageScanRequest withImageId(ImageIdentifier imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public StartImageScanRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public StartImageScanRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}