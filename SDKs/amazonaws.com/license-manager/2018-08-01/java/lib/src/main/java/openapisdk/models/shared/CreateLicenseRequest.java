package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseRequest {
    @JsonProperty("Beneficiary")
    public String beneficiary;
    public CreateLicenseRequest withBeneficiary(String beneficiary) {
        this.beneficiary = beneficiary;
        return this;
    }
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateLicenseRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ConsumptionConfiguration")
    public ConsumptionConfiguration consumptionConfiguration;
    public CreateLicenseRequest withConsumptionConfiguration(ConsumptionConfiguration consumptionConfiguration) {
        this.consumptionConfiguration = consumptionConfiguration;
        return this;
    }
    @JsonProperty("Entitlements")
    public Entitlement[] entitlements;
    public CreateLicenseRequest withEntitlements(Entitlement[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public CreateLicenseRequest withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonProperty("Issuer")
    public Issuer issuer;
    public CreateLicenseRequest withIssuer(Issuer issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseMetadata")
    public Metadata[] licenseMetadata;
    public CreateLicenseRequest withLicenseMetadata(Metadata[] licenseMetadata) {
        this.licenseMetadata = licenseMetadata;
        return this;
    }
    @JsonProperty("LicenseName")
    public String licenseName;
    public CreateLicenseRequest withLicenseName(String licenseName) {
        this.licenseName = licenseName;
        return this;
    }
    @JsonProperty("ProductName")
    public String productName;
    public CreateLicenseRequest withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonProperty("ProductSKU")
    public String productSKU;
    public CreateLicenseRequest withProductSku(String productSKU) {
        this.productSKU = productSKU;
        return this;
    }
    @JsonProperty("Validity")
    public DatetimeRange validity;
    public CreateLicenseRequest withValidity(DatetimeRange validity) {
        this.validity = validity;
        return this;
    }
}