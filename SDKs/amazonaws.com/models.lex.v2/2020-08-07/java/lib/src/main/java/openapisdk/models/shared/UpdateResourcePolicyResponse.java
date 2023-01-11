package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public UpdateResourcePolicyResponse withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public UpdateResourcePolicyResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}