package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListenerTlsAcmCertificate
 * An object that represents an AWS Certicate Manager (ACM) certificate.
**/
public class ListenerTlsAcmCertificate {
    @JsonProperty("certificateArn")
    public String certificateArn;
    public ListenerTlsAcmCertificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}