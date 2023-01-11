package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEventTopicsResult
 * The result of a DescribeEventTopic request.
**/
public class DescribeEventTopicsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTopics")
    public EventTopic[] eventTopics;
    public DescribeEventTopicsResult withEventTopics(EventTopic[] eventTopics) {
        this.eventTopics = eventTopics;
        return this;
    }
}