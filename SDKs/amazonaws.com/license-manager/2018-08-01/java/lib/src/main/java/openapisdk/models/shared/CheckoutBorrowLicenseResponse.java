package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckoutBorrowLicenseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckoutMetadata")
    public Metadata[] checkoutMetadata;
    public CheckoutBorrowLicenseResponse withCheckoutMetadata(Metadata[] checkoutMetadata) {
        this.checkoutMetadata = checkoutMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitlementsAllowed")
    public EntitlementData[] entitlementsAllowed;
    public CheckoutBorrowLicenseResponse withEntitlementsAllowed(EntitlementData[] entitlementsAllowed) {
        this.entitlementsAllowed = entitlementsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expiration")
    public String expiration;
    public CheckoutBorrowLicenseResponse withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IssuedAt")
    public String issuedAt;
    public CheckoutBorrowLicenseResponse withIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public CheckoutBorrowLicenseResponse withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConsumptionToken")
    public String licenseConsumptionToken;
    public CheckoutBorrowLicenseResponse withLicenseConsumptionToken(String licenseConsumptionToken) {
        this.licenseConsumptionToken = licenseConsumptionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeId")
    public String nodeId;
    public CheckoutBorrowLicenseResponse withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignedToken")
    public String signedToken;
    public CheckoutBorrowLicenseResponse withSignedToken(String signedToken) {
        this.signedToken = signedToken;
        return this;
    }
}