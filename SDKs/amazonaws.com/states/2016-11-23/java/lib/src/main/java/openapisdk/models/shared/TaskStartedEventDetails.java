package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TaskStartedEventDetails
 * Contains details about the start of a task during an execution.
**/
public class TaskStartedEventDetails {
    @JsonProperty("resource")
    public String resource;
    public TaskStartedEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskStartedEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}