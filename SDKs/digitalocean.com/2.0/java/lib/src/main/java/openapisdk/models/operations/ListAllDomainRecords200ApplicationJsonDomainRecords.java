package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDomainRecords200ApplicationJsonDomainRecords {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public Long flags;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withFlags(Long flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public ListAllDomainRecords200ApplicationJsonDomainRecords withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}