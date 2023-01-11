package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeProjectRequest {
    @JsonProperty("id")
    public String id;
    public DescribeProjectRequest withId(String id) {
        this.id = id;
        return this;
    }
}