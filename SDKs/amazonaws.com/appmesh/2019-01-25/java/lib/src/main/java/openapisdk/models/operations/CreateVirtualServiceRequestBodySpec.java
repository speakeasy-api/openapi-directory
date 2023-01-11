package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVirtualServiceRequestBodySpec
 * An object that represents the specification of a virtual service.
**/
public class CreateVirtualServiceRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public openapisdk.models.shared.VirtualServiceProvider provider;
    public CreateVirtualServiceRequestBodySpec withProvider(openapisdk.models.shared.VirtualServiceProvider provider) {
        this.provider = provider;
        return this;
    }
}