package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskSubmittedEventDetails
 * Contains details about a task submitted to a resource .
**/
public class TaskSubmittedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public TaskSubmittedEventDetails withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public HistoryEventExecutionDataDetails outputDetails;
    public TaskSubmittedEventDetails withOutputDetails(HistoryEventExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskSubmittedEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskSubmittedEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}