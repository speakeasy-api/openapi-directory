package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociationsForLicenseConfigurationRequest {
    @JsonProperty("LicenseConfigurationArn")
    public String licenseConfigurationArn;
    public ListAssociationsForLicenseConfigurationRequest withLicenseConfigurationArn(String licenseConfigurationArn) {
        this.licenseConfigurationArn = licenseConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAssociationsForLicenseConfigurationRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssociationsForLicenseConfigurationRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}