package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFirewallRuleGroupRequest {
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreateFirewallRuleGroupRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateFirewallRuleGroupRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateFirewallRuleGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}