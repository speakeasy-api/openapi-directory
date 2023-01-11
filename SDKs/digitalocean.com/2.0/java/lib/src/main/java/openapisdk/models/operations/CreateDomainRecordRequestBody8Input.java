package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRecordRequestBody8Input {
    @JsonProperty("data")
    public String data;
    public CreateDomainRecordRequestBody8Input withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("flags")
    public Long flags;
    public CreateDomainRecordRequestBody8Input withFlags(Long flags) {
        this.flags = flags;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDomainRecordRequestBody8Input withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public CreateDomainRecordRequestBody8Input withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("priority")
    public Long priority;
    public CreateDomainRecordRequestBody8Input withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public CreateDomainRecordRequestBody8Input withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public CreateDomainRecordRequestBody8Input withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateDomainRecordRequestBody8Input withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public CreateDomainRecordRequestBody8Input withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}