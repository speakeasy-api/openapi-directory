package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Queue {
    @JsonProperty("maxLength")
    public Long maxLength;
    public Queue withMaxLength(Long maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Queue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public Queue withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("ttl")
    public Long ttl;
    public Queue withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}