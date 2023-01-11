package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStatementRequest {
    @JsonProperty("Id")
    public String id;
    public DescribeStatementRequest withId(String id) {
        this.id = id;
        return this;
    }
}