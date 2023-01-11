package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRecordRequestBody3Input {
    @JsonProperty("data")
    public String data;
    public CreateDomainRecordRequestBody3Input withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("flags")
    public Long flags;
    public CreateDomainRecordRequestBody3Input withFlags(Long flags) {
        this.flags = flags;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDomainRecordRequestBody3Input withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public CreateDomainRecordRequestBody3Input withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public CreateDomainRecordRequestBody3Input withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public CreateDomainRecordRequestBody3Input withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public CreateDomainRecordRequestBody3Input withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateDomainRecordRequestBody3Input withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public CreateDomainRecordRequestBody3Input withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}