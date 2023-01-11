package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVirtualRouterRequestBodySpec
 * An object representing the specification of a virtual router.
**/
public class CreateVirtualRouterRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceNames")
    public String[] serviceNames;
    public CreateVirtualRouterRequestBodySpec withServiceNames(String[] serviceNames) {
        this.serviceNames = serviceNames;
        return this;
    }
}