package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Protection
 * An object that represents a resource that is under DDoS protection.
**/
public class Protection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckIds")
    public String[] healthCheckIds;
    public Protection withHealthCheckIds(String[] healthCheckIds) {
        this.healthCheckIds = healthCheckIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Protection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Protection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtectionArn")
    public String protectionArn;
    public Protection withProtectionArn(String protectionArn) {
        this.protectionArn = protectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public Protection withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}