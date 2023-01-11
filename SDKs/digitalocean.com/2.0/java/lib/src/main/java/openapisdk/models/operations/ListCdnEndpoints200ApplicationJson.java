package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCdnEndpoints200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoints")
    public ListCdnEndpoints200ApplicationJsonEndpoints[] endpoints;
    public ListCdnEndpoints200ApplicationJson withEndpoints(ListCdnEndpoints200ApplicationJsonEndpoints[] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListCdnEndpoints200ApplicationJsonLinks links;
    public ListCdnEndpoints200ApplicationJson withLinks(ListCdnEndpoints200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListCdnEndpoints200ApplicationJsonMeta meta;
    public ListCdnEndpoints200ApplicationJson withMeta(ListCdnEndpoints200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}