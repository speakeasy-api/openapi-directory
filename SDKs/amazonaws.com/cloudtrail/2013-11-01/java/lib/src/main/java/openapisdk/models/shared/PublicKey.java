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
 * PublicKey
 * Contains information about a returned public key.
**/
public class PublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fingerprint")
    public String fingerprint;
    public PublicKey withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValidityEndTime")
    public OffsetDateTime validityEndTime;
    public PublicKey withValidityEndTime(OffsetDateTime validityEndTime) {
        this.validityEndTime = validityEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValidityStartTime")
    public OffsetDateTime validityStartTime;
    public PublicKey withValidityStartTime(OffsetDateTime validityStartTime) {
        this.validityStartTime = validityStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public PublicKey withValue(String value) {
        this.value = value;
        return this;
    }
}