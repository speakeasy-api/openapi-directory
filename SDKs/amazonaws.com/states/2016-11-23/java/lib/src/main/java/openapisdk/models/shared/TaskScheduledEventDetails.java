package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskScheduledEventDetails
 * Contains details about a task scheduled during an execution.
**/
public class TaskScheduledEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heartbeatInSeconds")
    public Long heartbeatInSeconds;
    public TaskScheduledEventDetails withHeartbeatInSeconds(Long heartbeatInSeconds) {
        this.heartbeatInSeconds = heartbeatInSeconds;
        return this;
    }
    @JsonProperty("parameters")
    public String parameters;
    public TaskScheduledEventDetails withParameters(String parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public TaskScheduledEventDetails withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public TaskScheduledEventDetails withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resourceType")
    public String resourceType;
    public TaskScheduledEventDetails withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInSeconds")
    public Long timeoutInSeconds;
    public TaskScheduledEventDetails withTimeoutInSeconds(Long timeoutInSeconds) {
        this.timeoutInSeconds = timeoutInSeconds;
        return this;
    }
}