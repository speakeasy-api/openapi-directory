package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskTimedOutEventDetails
 * Contains details about a resource timeout that occurred during an execution.
**/
public class TaskTimedOutEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public TaskTimedOutEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public TaskTimedOutEventDetails withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskTimedOutEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskTimedOutEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}