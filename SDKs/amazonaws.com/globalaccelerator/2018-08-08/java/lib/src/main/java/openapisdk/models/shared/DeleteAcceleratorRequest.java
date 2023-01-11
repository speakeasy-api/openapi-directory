package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAcceleratorRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public DeleteAcceleratorRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
}