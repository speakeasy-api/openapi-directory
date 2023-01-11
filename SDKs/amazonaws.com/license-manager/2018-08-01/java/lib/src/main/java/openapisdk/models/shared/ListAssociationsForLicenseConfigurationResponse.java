package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociationsForLicenseConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConfigurationAssociations")
    public LicenseConfigurationAssociation[] licenseConfigurationAssociations;
    public ListAssociationsForLicenseConfigurationResponse withLicenseConfigurationAssociations(LicenseConfigurationAssociation[] licenseConfigurationAssociations) {
        this.licenseConfigurationAssociations = licenseConfigurationAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssociationsForLicenseConfigurationResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}