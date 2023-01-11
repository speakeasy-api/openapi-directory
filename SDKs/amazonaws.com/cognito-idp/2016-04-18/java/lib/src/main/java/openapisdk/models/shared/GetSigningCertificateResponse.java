package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSigningCertificateResponse
 * Response from Cognito for a signing certificate request.
**/
public class GetSigningCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public GetSigningCertificateResponse withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
}