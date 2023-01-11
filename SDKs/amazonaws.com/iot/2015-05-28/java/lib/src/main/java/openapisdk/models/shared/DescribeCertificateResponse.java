package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeCertificateResponse
 * The output of the DescribeCertificate operation.
**/
public class DescribeCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDescription")
    public CertificateDescription certificateDescription;
    public DescribeCertificateResponse withCertificateDescription(CertificateDescription certificateDescription) {
        this.certificateDescription = certificateDescription;
        return this;
    }
}