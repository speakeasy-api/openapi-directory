package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEventSourceRequest {
    @JsonProperty("Name")
    public String name;
    public DescribeEventSourceRequest withName(String name) {
        this.name = name;
        return this;
    }
}