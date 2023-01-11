package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskFailedEventDetails
 * Contains details about a task failure event.
**/
public class TaskFailedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public TaskFailedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public TaskFailedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskFailedEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskFailedEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}