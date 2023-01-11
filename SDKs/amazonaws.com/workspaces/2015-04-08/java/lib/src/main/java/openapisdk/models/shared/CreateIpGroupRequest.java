package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIpGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupDesc")
    public String groupDesc;
    public CreateIpGroupRequest withGroupDesc(String groupDesc) {
        this.groupDesc = groupDesc;
        return this;
    }
    @JsonProperty("GroupName")
    public String groupName;
    public CreateIpGroupRequest withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateIpGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserRules")
    public IpRuleItem[] userRules;
    public CreateIpGroupRequest withUserRules(IpRuleItem[] userRules) {
        this.userRules = userRules;
        return this;
    }
}