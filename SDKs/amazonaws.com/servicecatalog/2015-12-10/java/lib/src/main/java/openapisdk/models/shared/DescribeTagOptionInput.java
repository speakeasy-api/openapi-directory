package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTagOptionInput {
    @JsonProperty("Id")
    public String id;
    public DescribeTagOptionInput withId(String id) {
        this.id = id;
        return this;
    }
}