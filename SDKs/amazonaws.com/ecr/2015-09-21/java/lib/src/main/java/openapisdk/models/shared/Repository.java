package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Repository
 * An object representing a repository.
**/
public class Repository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Repository withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public Repository withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanningConfiguration")
    public ImageScanningConfiguration imageScanningConfiguration;
    public Repository withImageScanningConfiguration(ImageScanningConfiguration imageScanningConfiguration) {
        this.imageScanningConfiguration = imageScanningConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTagMutability")
    public ImageTagMutabilityEnum imageTagMutability;
    public Repository withImageTagMutability(ImageTagMutabilityEnum imageTagMutability) {
        this.imageTagMutability = imageTagMutability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public Repository withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryArn")
    public String repositoryArn;
    public Repository withRepositoryArn(String repositoryArn) {
        this.repositoryArn = repositoryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public Repository withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryUri")
    public String repositoryUri;
    public Repository withRepositoryUri(String repositoryUri) {
        this.repositoryUri = repositoryUri;
        return this;
    }
}