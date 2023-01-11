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
 * ServerReplicationParameters
 * The replication parameters for replicating a server.
**/
public class ServerReplicationParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted")
    public Boolean encrypted;
    public ServerReplicationParameters withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public Long frequency;
    public ServerReplicationParameters withFrequency(Long frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public ServerReplicationParameters withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseType")
    public LicenseTypeEnum licenseType;
    public ServerReplicationParameters withLicenseType(LicenseTypeEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfRecentAmisToKeep")
    public Long numberOfRecentAmisToKeep;
    public ServerReplicationParameters withNumberOfRecentAmisToKeep(Long numberOfRecentAmisToKeep) {
        this.numberOfRecentAmisToKeep = numberOfRecentAmisToKeep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runOnce")
    public Boolean runOnce;
    public ServerReplicationParameters withRunOnce(Boolean runOnce) {
        this.runOnce = runOnce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("seedTime")
    public OffsetDateTime seedTime;
    public ServerReplicationParameters withSeedTime(OffsetDateTime seedTime) {
        this.seedTime = seedTime;
        return this;
    }
}