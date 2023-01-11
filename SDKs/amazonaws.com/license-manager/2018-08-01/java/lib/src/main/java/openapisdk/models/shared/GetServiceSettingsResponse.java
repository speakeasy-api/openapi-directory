package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServiceSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableCrossAccountsDiscovery")
    public Boolean enableCrossAccountsDiscovery;
    public GetServiceSettingsResponse withEnableCrossAccountsDiscovery(Boolean enableCrossAccountsDiscovery) {
        this.enableCrossAccountsDiscovery = enableCrossAccountsDiscovery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseManagerResourceShareArn")
    public String licenseManagerResourceShareArn;
    public GetServiceSettingsResponse withLicenseManagerResourceShareArn(String licenseManagerResourceShareArn) {
        this.licenseManagerResourceShareArn = licenseManagerResourceShareArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConfiguration")
    public OrganizationConfiguration organizationConfiguration;
    public GetServiceSettingsResponse withOrganizationConfiguration(OrganizationConfiguration organizationConfiguration) {
        this.organizationConfiguration = organizationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketArn")
    public String s3BucketArn;
    public GetServiceSettingsResponse withS3BucketArn(String s3BucketArn) {
        this.s3BucketArn = s3BucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public GetServiceSettingsResponse withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}