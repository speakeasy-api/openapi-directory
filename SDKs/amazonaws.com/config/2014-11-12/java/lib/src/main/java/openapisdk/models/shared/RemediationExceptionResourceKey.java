package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemediationExceptionResourceKey
 * The details that identify a resource within Config, including the resource type and resource ID. 
**/
public class RemediationExceptionResourceKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public RemediationExceptionResourceKey withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public RemediationExceptionResourceKey withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}