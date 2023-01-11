package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaultRootCause
 * The root cause information for a trace summary fault.
**/
public class FaultRootCause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientImpacting")
    public Boolean clientImpacting;
    public FaultRootCause withClientImpacting(Boolean clientImpacting) {
        this.clientImpacting = clientImpacting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Services")
    public FaultRootCauseService[] services;
    public FaultRootCause withServices(FaultRootCauseService[] services) {
        this.services = services;
        return this;
    }
}