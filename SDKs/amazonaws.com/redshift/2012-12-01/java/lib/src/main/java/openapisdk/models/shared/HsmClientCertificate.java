package openapisdk.models.shared;



/**
 * HsmClientCertificate
 * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
**/
public class HsmClientCertificate {
    public String hsmClientCertificateIdentifier;
    public HsmClientCertificate withHsmClientCertificateIdentifier(String hsmClientCertificateIdentifier) {
        this.hsmClientCertificateIdentifier = hsmClientCertificateIdentifier;
        return this;
    }
    public String hsmClientCertificatePublicKey;
    public HsmClientCertificate withHsmClientCertificatePublicKey(String hsmClientCertificatePublicKey) {
        this.hsmClientCertificatePublicKey = hsmClientCertificatePublicKey;
        return this;
    }
    public TagList[] tags;
    public HsmClientCertificate withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}