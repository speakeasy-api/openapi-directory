package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorRootCause
 * The root cause of a trace summary error.
**/
public class ErrorRootCause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientImpacting")
    public Boolean clientImpacting;
    public ErrorRootCause withClientImpacting(Boolean clientImpacting) {
        this.clientImpacting = clientImpacting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Services")
    public ErrorRootCauseService[] services;
    public ErrorRootCause withServices(ErrorRootCauseService[] services) {
        this.services = services;
        return this;
    }
}