package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckoutLicenseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckoutType")
    public CheckoutTypeEnum checkoutType;
    public CheckoutLicenseResponse withCheckoutType(CheckoutTypeEnum checkoutType) {
        this.checkoutType = checkoutType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitlementsAllowed")
    public EntitlementData[] entitlementsAllowed;
    public CheckoutLicenseResponse withEntitlementsAllowed(EntitlementData[] entitlementsAllowed) {
        this.entitlementsAllowed = entitlementsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expiration")
    public String expiration;
    public CheckoutLicenseResponse withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IssuedAt")
    public String issuedAt;
    public CheckoutLicenseResponse withIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConsumptionToken")
    public String licenseConsumptionToken;
    public CheckoutLicenseResponse withLicenseConsumptionToken(String licenseConsumptionToken) {
        this.licenseConsumptionToken = licenseConsumptionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeId")
    public String nodeId;
    public CheckoutLicenseResponse withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignedToken")
    public String signedToken;
    public CheckoutLicenseResponse withSignedToken(String signedToken) {
        this.signedToken = signedToken;
        return this;
    }
}