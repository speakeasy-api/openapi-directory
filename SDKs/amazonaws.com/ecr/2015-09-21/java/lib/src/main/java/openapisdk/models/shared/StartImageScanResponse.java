package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImageScanResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public ImageIdentifier imageId;
    public StartImageScanResponse withImageId(ImageIdentifier imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanStatus")
    public ImageScanStatus imageScanStatus;
    public StartImageScanResponse withImageScanStatus(ImageScanStatus imageScanStatus) {
        this.imageScanStatus = imageScanStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public StartImageScanResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public StartImageScanResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}