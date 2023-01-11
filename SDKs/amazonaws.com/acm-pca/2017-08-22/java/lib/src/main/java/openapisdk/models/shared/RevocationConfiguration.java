package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevocationConfiguration
 * Certificate revocation information used by the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User Guide</i>.
**/
public class RevocationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrlConfiguration")
    public CrlConfiguration crlConfiguration;
    public RevocationConfiguration withCrlConfiguration(CrlConfiguration crlConfiguration) {
        this.crlConfiguration = crlConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OcspConfiguration")
    public OcspConfiguration ocspConfiguration;
    public RevocationConfiguration withOcspConfiguration(OcspConfiguration ocspConfiguration) {
        this.ocspConfiguration = ocspConfiguration;
        return this;
    }
}