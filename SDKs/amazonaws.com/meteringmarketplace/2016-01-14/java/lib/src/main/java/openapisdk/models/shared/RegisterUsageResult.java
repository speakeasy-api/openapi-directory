package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RegisterUsageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("PublicKeyRotationTimestamp")
    public OffsetDateTime publicKeyRotationTimestamp;
    public RegisterUsageResult withPublicKeyRotationTimestamp(OffsetDateTime publicKeyRotationTimestamp) {
        this.publicKeyRotationTimestamp = publicKeyRotationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Signature")
    public String signature;
    public RegisterUsageResult withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}