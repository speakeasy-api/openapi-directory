package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpTimeout
 * An object that represents types of timeouts. 
**/
public class HttpTimeout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idle")
    public Duration idle;
    public HttpTimeout withIdle(Duration idle) {
        this.idle = idle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perRequest")
    public Duration perRequest;
    public HttpTimeout withPerRequest(Duration perRequest) {
        this.perRequest = perRequest;
        return this;
    }
}