package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckoutBorrowLicenseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckoutMetadata")
    public Metadata[] checkoutMetadata;
    public CheckoutBorrowLicenseRequest withCheckoutMetadata(Metadata[] checkoutMetadata) {
        this.checkoutMetadata = checkoutMetadata;
        return this;
    }
    @JsonProperty("ClientToken")
    public String clientToken;
    public CheckoutBorrowLicenseRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("DigitalSignatureMethod")
    public DigitalSignatureMethodEnum digitalSignatureMethod;
    public CheckoutBorrowLicenseRequest withDigitalSignatureMethod(DigitalSignatureMethodEnum digitalSignatureMethod) {
        this.digitalSignatureMethod = digitalSignatureMethod;
        return this;
    }
    @JsonProperty("Entitlements")
    public EntitlementData[] entitlements;
    public CheckoutBorrowLicenseRequest withEntitlements(EntitlementData[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public CheckoutBorrowLicenseRequest withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeId")
    public String nodeId;
    public CheckoutBorrowLicenseRequest withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}