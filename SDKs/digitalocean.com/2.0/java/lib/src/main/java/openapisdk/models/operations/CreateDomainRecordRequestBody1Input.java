package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRecordRequestBody1Input {
    @JsonProperty("data")
    public String data;
    public CreateDomainRecordRequestBody1Input withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public Long flags;
    public CreateDomainRecordRequestBody1Input withFlags(Long flags) {
        this.flags = flags;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDomainRecordRequestBody1Input withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public CreateDomainRecordRequestBody1Input withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public CreateDomainRecordRequestBody1Input withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public CreateDomainRecordRequestBody1Input withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public CreateDomainRecordRequestBody1Input withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateDomainRecordRequestBody1Input withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public CreateDomainRecordRequestBody1Input withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}