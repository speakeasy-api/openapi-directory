package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteVirtualServiceOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DeleteVirtualServiceOutput {
    @JsonProperty("virtualService")
    public VirtualServiceData virtualService;
    public DeleteVirtualServiceOutput withVirtualService(VirtualServiceData virtualService) {
        this.virtualService = virtualService;
        return this;
    }
}