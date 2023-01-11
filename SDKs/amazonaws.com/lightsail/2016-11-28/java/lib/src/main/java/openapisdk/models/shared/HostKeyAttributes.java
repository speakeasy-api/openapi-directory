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
 * HostKeyAttributes
 * Describes the public SSH host keys or the RDP certificate.
**/
public class HostKeyAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public String algorithm;
    public HostKeyAttributes withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprintSHA1")
    public String fingerprintSha1;
    public HostKeyAttributes withFingerprintSha1(String fingerprintSha1) {
        this.fingerprintSha1 = fingerprintSha1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprintSHA256")
    public String fingerprintSha256;
    public HostKeyAttributes withFingerprintSha256(String fingerprintSha256) {
        this.fingerprintSha256 = fingerprintSha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("notValidAfter")
    public OffsetDateTime notValidAfter;
    public HostKeyAttributes withNotValidAfter(OffsetDateTime notValidAfter) {
        this.notValidAfter = notValidAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("notValidBefore")
    public OffsetDateTime notValidBefore;
    public HostKeyAttributes withNotValidBefore(OffsetDateTime notValidBefore) {
        this.notValidBefore = notValidBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public HostKeyAttributes withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("witnessedAt")
    public OffsetDateTime witnessedAt;
    public HostKeyAttributes withWitnessedAt(OffsetDateTime witnessedAt) {
        this.witnessedAt = witnessedAt;
        return this;
    }
}