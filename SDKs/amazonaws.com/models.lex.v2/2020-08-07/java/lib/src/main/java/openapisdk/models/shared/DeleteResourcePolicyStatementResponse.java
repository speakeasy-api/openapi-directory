package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResourcePolicyStatementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public DeleteResourcePolicyStatementResponse withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public DeleteResourcePolicyStatementResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}