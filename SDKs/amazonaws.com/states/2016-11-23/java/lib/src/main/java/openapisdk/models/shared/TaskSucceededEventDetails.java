package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskSucceededEventDetails
 * Contains details about the successful completion of a task state.
**/
public class TaskSucceededEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public TaskSucceededEventDetails withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public HistoryEventExecutionDataDetails outputDetails;
    public TaskSucceededEventDetails withOutputDetails(HistoryEventExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskSucceededEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskSucceededEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}