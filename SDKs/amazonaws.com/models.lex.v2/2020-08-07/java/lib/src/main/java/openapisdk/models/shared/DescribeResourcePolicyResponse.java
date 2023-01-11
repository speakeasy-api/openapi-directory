package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public String policy;
    public DescribeResourcePolicyResponse withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public DescribeResourcePolicyResponse withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public DescribeResourcePolicyResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}