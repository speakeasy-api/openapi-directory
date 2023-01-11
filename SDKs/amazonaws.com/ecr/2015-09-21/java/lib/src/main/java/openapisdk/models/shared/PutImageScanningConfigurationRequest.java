package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImageScanningConfigurationRequest {
    @JsonProperty("imageScanningConfiguration")
    public ImageScanningConfiguration imageScanningConfiguration;
    public PutImageScanningConfigurationRequest withImageScanningConfiguration(ImageScanningConfiguration imageScanningConfiguration) {
        this.imageScanningConfiguration = imageScanningConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public PutImageScanningConfigurationRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PutImageScanningConfigurationRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}