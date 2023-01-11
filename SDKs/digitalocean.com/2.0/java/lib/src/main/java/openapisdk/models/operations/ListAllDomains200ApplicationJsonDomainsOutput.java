package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDomains200ApplicationJsonDomainsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAllDomains200ApplicationJsonDomainsOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public ListAllDomains200ApplicationJsonDomainsOutput withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone_file")
    public String zoneFile;
    public ListAllDomains200ApplicationJsonDomainsOutput withZoneFile(String zoneFile) {
        this.zoneFile = zoneFile;
        return this;
    }
}