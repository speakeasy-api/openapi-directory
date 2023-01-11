package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Grant
 * Describes a grant.
**/
public class Grant {
    @JsonProperty("GrantArn")
    public String grantArn;
    public Grant withGrantArn(String grantArn) {
        this.grantArn = grantArn;
        return this;
    }
    @JsonProperty("GrantName")
    public String grantName;
    public Grant withGrantName(String grantName) {
        this.grantName = grantName;
        return this;
    }
    @JsonProperty("GrantStatus")
    public GrantStatusEnum grantStatus;
    public Grant withGrantStatus(GrantStatusEnum grantStatus) {
        this.grantStatus = grantStatus;
        return this;
    }
    @JsonProperty("GrantedOperations")
    public AllowedOperationEnum[] grantedOperations;
    public Grant withGrantedOperations(AllowedOperationEnum[] grantedOperations) {
        this.grantedOperations = grantedOperations;
        return this;
    }
    @JsonProperty("GranteePrincipalArn")
    public String granteePrincipalArn;
    public Grant withGranteePrincipalArn(String granteePrincipalArn) {
        this.granteePrincipalArn = granteePrincipalArn;
        return this;
    }
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public Grant withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public Grant withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonProperty("ParentArn")
    public String parentArn;
    public Grant withParentArn(String parentArn) {
        this.parentArn = parentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public Grant withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonProperty("Version")
    public String version;
    public Grant withVersion(String version) {
        this.version = version;
        return this;
    }
}