package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskStartFailedEventDetails
 * Contains details about a task that failed to start during an execution.
**/
public class TaskStartFailedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public TaskStartFailedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public TaskStartFailedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskStartFailedEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskStartFailedEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}