package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRecordRequestBody7Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public CreateDomainRecordRequestBody7Input withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public Long flags;
    public CreateDomainRecordRequestBody7Input withFlags(Long flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateDomainRecordRequestBody7Input withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public CreateDomainRecordRequestBody7Input withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public CreateDomainRecordRequestBody7Input withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public CreateDomainRecordRequestBody7Input withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("ttl")
    public Long ttl;
    public CreateDomainRecordRequestBody7Input withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateDomainRecordRequestBody7Input withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public CreateDomainRecordRequestBody7Input withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}