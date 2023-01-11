package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateVirtualServiceOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class CreateVirtualServiceOutput {
    @JsonProperty("virtualService")
    public VirtualServiceData virtualService;
    public CreateVirtualServiceOutput withVirtualService(VirtualServiceData virtualService) {
        this.virtualService = virtualService;
        return this;
    }
}