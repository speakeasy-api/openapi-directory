package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeApiDestinationRequest {
    @JsonProperty("Name")
    public String name;
    public DescribeApiDestinationRequest withName(String name) {
        this.name = name;
        return this;
    }
}