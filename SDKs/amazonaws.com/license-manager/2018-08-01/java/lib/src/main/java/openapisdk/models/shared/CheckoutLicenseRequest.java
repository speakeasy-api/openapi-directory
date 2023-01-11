package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckoutLicenseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beneficiary")
    public String beneficiary;
    public CheckoutLicenseRequest withBeneficiary(String beneficiary) {
        this.beneficiary = beneficiary;
        return this;
    }
    @JsonProperty("CheckoutType")
    public CheckoutTypeEnum checkoutType;
    public CheckoutLicenseRequest withCheckoutType(CheckoutTypeEnum checkoutType) {
        this.checkoutType = checkoutType;
        return this;
    }
    @JsonProperty("ClientToken")
    public String clientToken;
    public CheckoutLicenseRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("Entitlements")
    public EntitlementData[] entitlements;
    public CheckoutLicenseRequest withEntitlements(EntitlementData[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonProperty("KeyFingerprint")
    public String keyFingerprint;
    public CheckoutLicenseRequest withKeyFingerprint(String keyFingerprint) {
        this.keyFingerprint = keyFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeId")
    public String nodeId;
    public CheckoutLicenseRequest withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("ProductSKU")
    public String productSKU;
    public CheckoutLicenseRequest withProductSku(String productSKU) {
        this.productSKU = productSKU;
        return this;
    }
}