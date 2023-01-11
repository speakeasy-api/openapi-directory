package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletKernels200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernels")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel[] kernels;
    public ListDropletKernels200ApplicationJson withKernels(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel[] kernels) {
        this.kernels = kernels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDropletKernels200ApplicationJsonLinks links;
    public ListDropletKernels200ApplicationJson withLinks(ListDropletKernels200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListDropletKernels200ApplicationJsonMeta meta;
    public ListDropletKernels200ApplicationJson withMeta(ListDropletKernels200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}