package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcTimeout
 * An object that represents types of timeouts. 
**/
public class GrpcTimeout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idle")
    public Duration idle;
    public GrpcTimeout withIdle(Duration idle) {
        this.idle = idle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perRequest")
    public Duration perRequest;
    public GrpcTimeout withPerRequest(Duration perRequest) {
        this.perRequest = perRequest;
        return this;
    }
}