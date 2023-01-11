package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterThingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificatePem")
    public String certificatePem;
    public RegisterThingResponse withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArns")
    public java.util.Map<String, String> resourceArns;
    public RegisterThingResponse withResourceArns(java.util.Map<String, String> resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
}