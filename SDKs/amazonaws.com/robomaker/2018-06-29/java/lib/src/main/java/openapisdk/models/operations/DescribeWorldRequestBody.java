package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorldRequestBody {
    @JsonProperty("world")
    public String world;
    public DescribeWorldRequestBody withWorld(String world) {
        this.world = world;
        return this;
    }
}