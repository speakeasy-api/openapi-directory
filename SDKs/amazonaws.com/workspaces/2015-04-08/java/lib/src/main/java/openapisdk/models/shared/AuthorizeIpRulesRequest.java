package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthorizeIpRulesRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public AuthorizeIpRulesRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("UserRules")
    public IpRuleItem[] userRules;
    public AuthorizeIpRulesRequest withUserRules(IpRuleItem[] userRules) {
        this.userRules = userRules;
        return this;
    }
}