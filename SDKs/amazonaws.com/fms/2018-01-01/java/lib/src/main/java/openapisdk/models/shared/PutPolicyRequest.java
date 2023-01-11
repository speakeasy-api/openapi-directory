package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPolicyRequest {
    @JsonProperty("Policy")
    public Policy policy;
    public PutPolicyRequest withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public PutPolicyRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}