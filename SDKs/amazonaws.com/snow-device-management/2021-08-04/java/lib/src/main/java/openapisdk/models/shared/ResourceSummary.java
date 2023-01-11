package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceSummary
 * A summary of a resource available on the device.
**/
public class ResourceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ResourceSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ResourceSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public ResourceSummary withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}