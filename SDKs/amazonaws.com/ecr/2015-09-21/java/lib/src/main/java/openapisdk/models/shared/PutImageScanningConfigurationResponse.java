package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImageScanningConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanningConfiguration")
    public ImageScanningConfiguration imageScanningConfiguration;
    public PutImageScanningConfigurationResponse withImageScanningConfiguration(ImageScanningConfiguration imageScanningConfiguration) {
        this.imageScanningConfiguration = imageScanningConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public PutImageScanningConfigurationResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PutImageScanningConfigurationResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}