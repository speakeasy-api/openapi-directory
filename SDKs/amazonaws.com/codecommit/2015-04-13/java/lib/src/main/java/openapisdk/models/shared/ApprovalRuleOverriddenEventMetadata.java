package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApprovalRuleOverriddenEventMetadata
 * Returns information about an override event for approval rules for a pull request.
**/
public class ApprovalRuleOverriddenEventMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideStatus")
    public OverrideStatusEnum overrideStatus;
    public ApprovalRuleOverriddenEventMetadata withOverrideStatus(OverrideStatusEnum overrideStatus) {
        this.overrideStatus = overrideStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public ApprovalRuleOverriddenEventMetadata withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}