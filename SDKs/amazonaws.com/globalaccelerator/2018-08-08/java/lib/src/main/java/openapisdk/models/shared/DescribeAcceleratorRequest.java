package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAcceleratorRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public DescribeAcceleratorRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
}