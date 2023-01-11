package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeServiceRequest {
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public DescribeServiceRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}