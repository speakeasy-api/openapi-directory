package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCustomRoutingAcceleratorRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public DescribeCustomRoutingAcceleratorRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
}