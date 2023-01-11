package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpiryEvents")
    public ExpiryEventsConfiguration expiryEvents;
    public PutAccountConfigurationRequest withExpiryEvents(ExpiryEventsConfiguration expiryEvents) {
        this.expiryEvents = expiryEvents;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public PutAccountConfigurationRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
}