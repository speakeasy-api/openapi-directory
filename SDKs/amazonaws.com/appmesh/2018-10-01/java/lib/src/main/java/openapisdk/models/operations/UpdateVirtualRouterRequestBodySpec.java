package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVirtualRouterRequestBodySpec
 * An object representing the specification of a virtual router.
**/
public class UpdateVirtualRouterRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceNames")
    public String[] serviceNames;
    public UpdateVirtualRouterRequestBodySpec withServiceNames(String[] serviceNames) {
        this.serviceNames = serviceNames;
        return this;
    }
}