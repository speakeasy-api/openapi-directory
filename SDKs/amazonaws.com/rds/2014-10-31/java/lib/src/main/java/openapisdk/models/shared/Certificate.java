package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Certificate
 * A CA certificate for an Amazon Web Services account.
**/
public class Certificate {
    public String certificateArn;
    public Certificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    public String certificateIdentifier;
    public Certificate withCertificateIdentifier(String certificateIdentifier) {
        this.certificateIdentifier = certificateIdentifier;
        return this;
    }
    public String certificateType;
    public Certificate withCertificateType(String certificateType) {
        this.certificateType = certificateType;
        return this;
    }
    public Boolean customerOverride;
    public Certificate withCustomerOverride(Boolean customerOverride) {
        this.customerOverride = customerOverride;
        return this;
    }
    public OffsetDateTime customerOverrideValidTill;
    public Certificate withCustomerOverrideValidTill(OffsetDateTime customerOverrideValidTill) {
        this.customerOverrideValidTill = customerOverrideValidTill;
        return this;
    }
    public String thumbprint;
    public Certificate withThumbprint(String thumbprint) {
        this.thumbprint = thumbprint;
        return this;
    }
    public OffsetDateTime validFrom;
    public Certificate withValidFrom(OffsetDateTime validFrom) {
        this.validFrom = validFrom;
        return this;
    }
    public OffsetDateTime validTill;
    public Certificate withValidTill(OffsetDateTime validTill) {
        this.validTill = validTill;
        return this;
    }
}