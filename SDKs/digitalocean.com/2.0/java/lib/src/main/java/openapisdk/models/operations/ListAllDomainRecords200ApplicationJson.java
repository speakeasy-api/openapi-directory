package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDomainRecords200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_records")
    public ListAllDomainRecords200ApplicationJsonDomainRecords[] domainRecords;
    public ListAllDomainRecords200ApplicationJson withDomainRecords(ListAllDomainRecords200ApplicationJsonDomainRecords[] domainRecords) {
        this.domainRecords = domainRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllDomainRecords200ApplicationJsonLinks links;
    public ListAllDomainRecords200ApplicationJson withLinks(ListAllDomainRecords200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllDomainRecords200ApplicationJsonMeta meta;
    public ListAllDomainRecords200ApplicationJson withMeta(ListAllDomainRecords200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}