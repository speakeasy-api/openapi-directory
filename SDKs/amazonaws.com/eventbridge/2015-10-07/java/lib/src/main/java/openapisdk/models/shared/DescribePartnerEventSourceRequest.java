package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePartnerEventSourceRequest {
    @JsonProperty("Name")
    public String name;
    public DescribePartnerEventSourceRequest withName(String name) {
        this.name = name;
        return this;
    }
}