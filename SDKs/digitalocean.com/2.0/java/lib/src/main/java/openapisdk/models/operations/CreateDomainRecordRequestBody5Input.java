package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRecordRequestBody5Input {
    @JsonProperty("data")
    public String data;
    public CreateDomainRecordRequestBody5Input withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public Long flags;
    public CreateDomainRecordRequestBody5Input withFlags(Long flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateDomainRecordRequestBody5Input withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public CreateDomainRecordRequestBody5Input withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("priority")
    public Long priority;
    public CreateDomainRecordRequestBody5Input withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public CreateDomainRecordRequestBody5Input withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public CreateDomainRecordRequestBody5Input withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateDomainRecordRequestBody5Input withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public CreateDomainRecordRequestBody5Input withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}