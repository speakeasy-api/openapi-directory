package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MappingRule
 * A rule that maps a claim name, a claim value, and a match type to a role ARN.
**/
public class MappingRule {
    @JsonProperty("Claim")
    public String claim;
    public MappingRule withClaim(String claim) {
        this.claim = claim;
        return this;
    }
    @JsonProperty("MatchType")
    public MappingRuleMatchTypeEnum matchType;
    public MappingRule withMatchType(MappingRuleMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public MappingRule withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public MappingRule withValue(String value) {
        this.value = value;
        return this;
    }
}