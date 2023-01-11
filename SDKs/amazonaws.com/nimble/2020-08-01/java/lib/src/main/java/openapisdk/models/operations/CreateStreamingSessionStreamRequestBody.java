package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingSessionStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationInSeconds")
    public Long expirationInSeconds;
    public CreateStreamingSessionStreamRequestBody withExpirationInSeconds(Long expirationInSeconds) {
        this.expirationInSeconds = expirationInSeconds;
        return this;
    }
}