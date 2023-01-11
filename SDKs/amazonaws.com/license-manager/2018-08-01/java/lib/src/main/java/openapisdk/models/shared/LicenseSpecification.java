package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseSpecification
 * Details for associating a license configuration with a resource.
**/
public class LicenseSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmiAssociationScope")
    public String amiAssociationScope;
    public LicenseSpecification withAmiAssociationScope(String amiAssociationScope) {
        this.amiAssociationScope = amiAssociationScope;
        return this;
    }
    @JsonProperty("LicenseConfigurationArn")
    public String licenseConfigurationArn;
    public LicenseSpecification withLicenseConfigurationArn(String licenseConfigurationArn) {
        this.licenseConfigurationArn = licenseConfigurationArn;
        return this;
    }
}