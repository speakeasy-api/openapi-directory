package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseTimeRootCause
 * The root cause information for a response time warning.
**/
public class ResponseTimeRootCause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientImpacting")
    public Boolean clientImpacting;
    public ResponseTimeRootCause withClientImpacting(Boolean clientImpacting) {
        this.clientImpacting = clientImpacting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Services")
    public ResponseTimeRootCauseService[] services;
    public ResponseTimeRootCause withServices(ResponseTimeRootCauseService[] services) {
        this.services = services;
        return this;
    }
}