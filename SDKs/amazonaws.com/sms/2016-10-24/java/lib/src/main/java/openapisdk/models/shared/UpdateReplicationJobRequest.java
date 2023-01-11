package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateReplicationJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateReplicationJobRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted")
    public Boolean encrypted;
    public UpdateReplicationJobRequest withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public Long frequency;
    public UpdateReplicationJobRequest withFrequency(Long frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public UpdateReplicationJobRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseType")
    public LicenseTypeEnum licenseType;
    public UpdateReplicationJobRequest withLicenseType(LicenseTypeEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("nextReplicationRunStartTime")
    public OffsetDateTime nextReplicationRunStartTime;
    public UpdateReplicationJobRequest withNextReplicationRunStartTime(OffsetDateTime nextReplicationRunStartTime) {
        this.nextReplicationRunStartTime = nextReplicationRunStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfRecentAmisToKeep")
    public Long numberOfRecentAmisToKeep;
    public UpdateReplicationJobRequest withNumberOfRecentAmisToKeep(Long numberOfRecentAmisToKeep) {
        this.numberOfRecentAmisToKeep = numberOfRecentAmisToKeep;
        return this;
    }
    @JsonProperty("replicationJobId")
    public String replicationJobId;
    public UpdateReplicationJobRequest withReplicationJobId(String replicationJobId) {
        this.replicationJobId = replicationJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleName")
    public String roleName;
    public UpdateReplicationJobRequest withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
}