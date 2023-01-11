package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRepositoryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public CreateRepositoryRequest withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanningConfiguration")
    public ImageScanningConfiguration imageScanningConfiguration;
    public CreateRepositoryRequest withImageScanningConfiguration(ImageScanningConfiguration imageScanningConfiguration) {
        this.imageScanningConfiguration = imageScanningConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTagMutability")
    public ImageTagMutabilityEnum imageTagMutability;
    public CreateRepositoryRequest withImageTagMutability(ImageTagMutabilityEnum imageTagMutability) {
        this.imageTagMutability = imageTagMutability;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CreateRepositoryRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateRepositoryRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}