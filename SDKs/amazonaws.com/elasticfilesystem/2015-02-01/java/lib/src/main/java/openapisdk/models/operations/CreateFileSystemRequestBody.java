package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFileSystemRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZoneName")
    public String availabilityZoneName;
    public CreateFileSystemRequestBody withAvailabilityZoneName(String availabilityZoneName) {
        this.availabilityZoneName = availabilityZoneName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Backup")
    public Boolean backup;
    public CreateFileSystemRequestBody withBackup(Boolean backup) {
        this.backup = backup;
        return this;
    }
    @JsonProperty("CreationToken")
    public String creationToken;
    public CreateFileSystemRequestBody withCreationToken(String creationToken) {
        this.creationToken = creationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public CreateFileSystemRequestBody withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateFileSystemRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformanceMode")
    public CreateFileSystemRequestBodyPerformanceModeEnum performanceMode;
    public CreateFileSystemRequestBody withPerformanceMode(CreateFileSystemRequestBodyPerformanceModeEnum performanceMode) {
        this.performanceMode = performanceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedThroughputInMibps")
    public Double provisionedThroughputInMibps;
    public CreateFileSystemRequestBody withProvisionedThroughputInMibps(Double provisionedThroughputInMibps) {
        this.provisionedThroughputInMibps = provisionedThroughputInMibps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateFileSystemRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThroughputMode")
    public CreateFileSystemRequestBodyThroughputModeEnum throughputMode;
    public CreateFileSystemRequestBody withThroughputMode(CreateFileSystemRequestBodyThroughputModeEnum throughputMode) {
        this.throughputMode = throughputMode;
        return this;
    }
}