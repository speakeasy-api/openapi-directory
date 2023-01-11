package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVpcs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListVpcs200ApplicationJsonLinks links;
    public ListVpcs200ApplicationJson withLinks(ListVpcs200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListVpcs200ApplicationJsonMeta meta;
    public ListVpcs200ApplicationJson withMeta(ListVpcs200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcs")
    public ListVpcs200ApplicationJsonVpcs[] vpcs;
    public ListVpcs200ApplicationJson withVpcs(ListVpcs200ApplicationJsonVpcs[] vpcs) {
        this.vpcs = vpcs;
        return this;
    }
}