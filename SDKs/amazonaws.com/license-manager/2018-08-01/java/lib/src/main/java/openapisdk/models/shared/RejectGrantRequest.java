package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RejectGrantRequest {
    @JsonProperty("GrantArn")
    public String grantArn;
    public RejectGrantRequest withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
}