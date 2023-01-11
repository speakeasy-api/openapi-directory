package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStreamProcessorRequest {
    @JsonProperty("Name")
    public String name;
    public DescribeStreamProcessorRequest withName(String name) {
        this.name = name;
        return this;
    }
}