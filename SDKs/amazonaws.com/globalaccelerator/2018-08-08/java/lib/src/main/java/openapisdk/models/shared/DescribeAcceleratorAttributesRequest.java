package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAcceleratorAttributesRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public DescribeAcceleratorAttributesRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
}