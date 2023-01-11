package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceUpdateRequest
 * A request to apply a service update
**/
public class ServiceUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUpdateNameToApply")
    public String serviceUpdateNameToApply;
    public ServiceUpdateRequest withServiceUpdateNameToApply(String serviceUpdateNameToApply) {
        this.serviceUpdateNameToApply = serviceUpdateNameToApply;
        return this;
    }
}