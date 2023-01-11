package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InteractionLimit
 * Limit interactions to a specific type of user for a specified duration
**/
public class InteractionLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiry")
    public InteractionExpiryEnum expiry;
    public InteractionLimit withExpiry(InteractionExpiryEnum expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonProperty("limit")
    public InteractionGroupEnum limit;
    public InteractionLimit withLimit(InteractionGroupEnum limit) {
        this.limit = limit;
        return this;
    }
}