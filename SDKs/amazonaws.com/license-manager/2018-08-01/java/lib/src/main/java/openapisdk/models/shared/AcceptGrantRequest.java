package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptGrantRequest {
    @JsonProperty("GrantArn")
    public String grantArn;
    public AcceptGrantRequest withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
}