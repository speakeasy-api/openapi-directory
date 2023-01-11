package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspacesIpGroup
 * Describes an IP access control group.
**/
public class WorkspacesIpGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupDesc")
    public String groupDesc;
    public WorkspacesIpGroup withGroupDesc(String groupDesc) {
        this.groupDesc = groupDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public WorkspacesIpGroup withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupName")
    public String groupName;
    public WorkspacesIpGroup withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRules")
    public IpRuleItem[] userRules;
    public WorkspacesIpGroup withUserRules(IpRuleItem[] userRules) {
        this.userRules = userRules;
        return this;
    }
}