package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualRouterSpec
 * An object representing the specification of a virtual router.
**/
public class VirtualRouterSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceNames")
    public String[] serviceNames;
    public VirtualRouterSpec withServiceNames(String[] serviceNames) {
        this.serviceNames = serviceNames;
        return this;
    }
}