package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevokeIpRulesRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public RevokeIpRulesRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("UserRules")
    public String[] userRules;
    public RevokeIpRulesRequest withUserRules(String[] userRules) {
        this.userRules = userRules;
        return this;
    }
}