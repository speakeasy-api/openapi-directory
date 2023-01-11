package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskSubmitFailedEventDetails
 * Contains details about a task that failed to submit during an execution.
**/
public class TaskSubmitFailedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public TaskSubmitFailedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public TaskSubmitFailedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskSubmitFailedEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskSubmitFailedEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}