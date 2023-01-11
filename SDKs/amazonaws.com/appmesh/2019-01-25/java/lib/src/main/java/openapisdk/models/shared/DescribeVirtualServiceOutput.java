package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeVirtualServiceOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DescribeVirtualServiceOutput {
    @JsonProperty("virtualService")
    public VirtualServiceData virtualService;
    public DescribeVirtualServiceOutput withVirtualService(VirtualServiceData virtualService) {
        this.virtualService = virtualService;
        return this;
    }
}