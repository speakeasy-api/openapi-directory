package openapisdk.models.shared;



/**
 * Certificate
 * Information about an SSL server certificate.
**/
public class Certificate {
    public String certificateArn;
    public Certificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    public Boolean isDefault;
    public Certificate withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
}