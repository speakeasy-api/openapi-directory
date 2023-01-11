package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateWebAclRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DisassociateWebAclRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}