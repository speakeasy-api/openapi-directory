package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseVersionRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateLicenseVersionRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ConsumptionConfiguration")
    public ConsumptionConfiguration consumptionConfiguration;
    public CreateLicenseVersionRequest withConsumptionConfiguration(ConsumptionConfiguration consumptionConfiguration) {
        this.consumptionConfiguration = consumptionConfiguration;
        return this;
    }
    @JsonProperty("Entitlements")
    public Entitlement[] entitlements;
    public CreateLicenseVersionRequest withEntitlements(Entitlement[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public CreateLicenseVersionRequest withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonProperty("Issuer")
    public Issuer issuer;
    public CreateLicenseVersionRequest withIssuer(Issuer issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public CreateLicenseVersionRequest withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseMetadata")
    public Metadata[] licenseMetadata;
    public CreateLicenseVersionRequest withLicenseMetadata(Metadata[] licenseMetadata) {
        this.licenseMetadata = licenseMetadata;
        return this;
    }
    @JsonProperty("LicenseName")
    public String licenseName;
    public CreateLicenseVersionRequest withLicenseName(String licenseName) {
        this.licenseName = licenseName;
        return this;
    }
    @JsonProperty("ProductName")
    public String productName;
    public CreateLicenseVersionRequest withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceVersion")
    public String sourceVersion;
    public CreateLicenseVersionRequest withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
    @JsonProperty("Status")
    public LicenseStatusEnum status;
    public CreateLicenseVersionRequest withStatus(LicenseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("Validity")
    public DatetimeRange validity;
    public CreateLicenseVersionRequest withValidity(DatetimeRange validity) {
        this.validity = validity;
        return this;
    }
}