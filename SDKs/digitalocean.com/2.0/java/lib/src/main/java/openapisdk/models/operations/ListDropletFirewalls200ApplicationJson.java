package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletFirewalls200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public ListDropletFirewalls200ApplicationJsonFirewalls[] firewalls;
    public ListDropletFirewalls200ApplicationJson withFirewalls(ListDropletFirewalls200ApplicationJsonFirewalls[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDropletFirewalls200ApplicationJsonLinks links;
    public ListDropletFirewalls200ApplicationJson withLinks(ListDropletFirewalls200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListDropletFirewalls200ApplicationJsonMeta meta;
    public ListDropletFirewalls200ApplicationJson withMeta(ListDropletFirewalls200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}