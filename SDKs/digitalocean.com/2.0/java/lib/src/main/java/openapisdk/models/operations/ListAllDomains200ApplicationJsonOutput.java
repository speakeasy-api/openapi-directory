package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDomains200ApplicationJsonOutput {
    @JsonProperty("domains")
    public ListAllDomains200ApplicationJsonDomainsOutput[] domains;
    public ListAllDomains200ApplicationJsonOutput withDomains(ListAllDomains200ApplicationJsonDomainsOutput[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllDomains200ApplicationJsonLinks links;
    public ListAllDomains200ApplicationJsonOutput withLinks(ListAllDomains200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllDomains200ApplicationJsonMeta meta;
    public ListAllDomains200ApplicationJsonOutput withMeta(ListAllDomains200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}