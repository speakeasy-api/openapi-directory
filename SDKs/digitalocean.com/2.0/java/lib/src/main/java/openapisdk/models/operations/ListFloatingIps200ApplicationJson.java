package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFloatingIps200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floating_ips")
    public ListFloatingIps200ApplicationJsonFloatingIps[] floatingIps;
    public ListFloatingIps200ApplicationJson withFloatingIps(ListFloatingIps200ApplicationJsonFloatingIps[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListFloatingIps200ApplicationJsonLinks links;
    public ListFloatingIps200ApplicationJson withLinks(ListFloatingIps200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListFloatingIps200ApplicationJsonMeta meta;
    public ListFloatingIps200ApplicationJson withMeta(ListFloatingIps200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}