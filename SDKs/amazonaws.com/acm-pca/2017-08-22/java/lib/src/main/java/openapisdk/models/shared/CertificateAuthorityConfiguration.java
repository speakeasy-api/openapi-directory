package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAuthorityConfiguration
 * Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. 
**/
public class CertificateAuthorityConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CsrExtensions")
    public CsrExtensions csrExtensions;
    public CertificateAuthorityConfiguration withCsrExtensions(CsrExtensions csrExtensions) {
        this.csrExtensions = csrExtensions;
        return this;
    }
    @JsonProperty("KeyAlgorithm")
    public KeyAlgorithmEnum keyAlgorithm;
    public CertificateAuthorityConfiguration withKeyAlgorithm(KeyAlgorithmEnum keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    @JsonProperty("SigningAlgorithm")
    public SigningAlgorithmEnum signingAlgorithm;
    public CertificateAuthorityConfiguration withSigningAlgorithm(SigningAlgorithmEnum signingAlgorithm) {
        this.signingAlgorithm = signingAlgorithm;
        return this;
    }
    @JsonProperty("Subject")
    public Asn1Subject subject;
    public CertificateAuthorityConfiguration withSubject(Asn1Subject subject) {
        this.subject = subject;
        return this;
    }
}