package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEventTrackerRequest {
    @JsonProperty("eventTrackerArn")
    public String eventTrackerArn;
    public DescribeEventTrackerRequest withEventTrackerArn(String eventTrackerArn) {
        this.eventTrackerArn = eventTrackerArn;
        return this;
    }
}