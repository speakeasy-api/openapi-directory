package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ValidatePolicyFinding
 * A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
**/
public class ValidatePolicyFinding {
    @JsonProperty("findingDetails")
    public String findingDetails;
    public ValidatePolicyFinding withFindingDetails(String findingDetails) {
        this.findingDetails = findingDetails;
        return this;
    }
    @JsonProperty("findingType")
    public ValidatePolicyFindingTypeEnum findingType;
    public ValidatePolicyFinding withFindingType(ValidatePolicyFindingTypeEnum findingType) {
        this.findingType = findingType;
        return this;
    }
    @JsonProperty("issueCode")
    public String issueCode;
    public ValidatePolicyFinding withIssueCode(String issueCode) {
        this.issueCode = issueCode;
        return this;
    }
    @JsonProperty("learnMoreLink")
    public String learnMoreLink;
    public ValidatePolicyFinding withLearnMoreLink(String learnMoreLink) {
        this.learnMoreLink = learnMoreLink;
        return this;
    }
    @JsonProperty("locations")
    public Location[] locations;
    public ValidatePolicyFinding withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
}