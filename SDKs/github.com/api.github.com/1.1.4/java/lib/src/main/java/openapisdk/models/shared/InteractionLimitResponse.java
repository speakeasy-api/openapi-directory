package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * InteractionLimitResponse
 * Interaction limit settings.
**/
public class InteractionLimitResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public InteractionLimitResponse withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonProperty("limit")
    public InteractionGroupEnum limit;
    public InteractionLimitResponse withLimit(InteractionGroupEnum limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("origin")
    public String origin;
    public InteractionLimitResponse withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}