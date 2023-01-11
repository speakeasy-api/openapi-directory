package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateVirtualServiceOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class UpdateVirtualServiceOutput {
    @JsonProperty("virtualService")
    public VirtualServiceData virtualService;
    public UpdateVirtualServiceOutput withVirtualService(VirtualServiceData virtualService) {
        this.virtualService = virtualService;
        return this;
    }
}