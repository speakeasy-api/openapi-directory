package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * CertificateList
 * A certificate authority (CA) certificate for an account.
**/
public class CertificateList {
    public String certificateArn;
    public CertificateList withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    public String certificateIdentifier;
    public CertificateList withCertificateIdentifier(String certificateIdentifier) {
        this.certificateIdentifier = certificateIdentifier;
        return this;
    }
    public String certificateType;
    public CertificateList withCertificateType(String certificateType) {
        this.certificateType = certificateType;
        return this;
    }
    public String thumbprint;
    public CertificateList withThumbprint(String thumbprint) {
        this.thumbprint = thumbprint;
        return this;
    }
    public OffsetDateTime validFrom;
    public CertificateList withValidFrom(OffsetDateTime validFrom) {
        this.validFrom = validFrom;
        return this;
    }
    public OffsetDateTime validTill;
    public CertificateList withValidTill(OffsetDateTime validTill) {
        this.validTill = validTill;
        return this;
    }
}