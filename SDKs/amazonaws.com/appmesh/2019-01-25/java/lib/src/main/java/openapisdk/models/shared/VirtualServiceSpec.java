package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualServiceSpec
 * An object that represents the specification of a virtual service.
**/
public class VirtualServiceSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public VirtualServiceProvider provider;
    public VirtualServiceSpec withProvider(VirtualServiceProvider provider) {
        this.provider = provider;
        return this;
    }
}