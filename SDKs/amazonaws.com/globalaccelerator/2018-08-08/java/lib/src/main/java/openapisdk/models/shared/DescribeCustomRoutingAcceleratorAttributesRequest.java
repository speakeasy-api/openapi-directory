package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCustomRoutingAcceleratorAttributesRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public DescribeCustomRoutingAcceleratorAttributesRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
}