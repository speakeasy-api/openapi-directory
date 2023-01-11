package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCustomRoutingAcceleratorRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public DeleteCustomRoutingAcceleratorRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
}