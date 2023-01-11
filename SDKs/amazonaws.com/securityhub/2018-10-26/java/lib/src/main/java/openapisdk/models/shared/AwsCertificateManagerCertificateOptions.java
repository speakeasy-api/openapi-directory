package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCertificateManagerCertificateOptions
 * Contains other options for the certificate.
**/
public class AwsCertificateManagerCertificateOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateTransparencyLoggingPreference")
    public String certificateTransparencyLoggingPreference;
    public AwsCertificateManagerCertificateOptions withCertificateTransparencyLoggingPreference(String certificateTransparencyLoggingPreference) {
        this.certificateTransparencyLoggingPreference = certificateTransparencyLoggingPreference;
        return this;
    }
}