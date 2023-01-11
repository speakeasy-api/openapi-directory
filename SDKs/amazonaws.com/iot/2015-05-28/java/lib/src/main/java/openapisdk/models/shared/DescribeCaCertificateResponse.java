package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeCaCertificateResponse
 * The output from the DescribeCACertificate operation.
**/
public class DescribeCaCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDescription")
    public CaCertificateDescription certificateDescription;
    public DescribeCaCertificateResponse withCertificateDescription(CaCertificateDescription certificateDescription) {
        this.certificateDescription = certificateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationConfig")
    public RegistrationConfig registrationConfig;
    public DescribeCaCertificateResponse withRegistrationConfig(RegistrationConfig registrationConfig) {
        this.registrationConfig = registrationConfig;
        return this;
    }
}