package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeConnectionRequest {
    @JsonProperty("Name")
    public String name;
    public DescribeConnectionRequest withName(String name) {
        this.name = name;
        return this;
    }
}