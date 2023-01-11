package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSigningCertificateRequest
 * Request to get a signing certificate from Cognito.
**/
public class GetSigningCertificateRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetSigningCertificateRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}