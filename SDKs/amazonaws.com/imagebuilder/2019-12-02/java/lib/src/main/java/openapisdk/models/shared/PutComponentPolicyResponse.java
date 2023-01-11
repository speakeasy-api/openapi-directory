package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutComponentPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentArn")
    public String componentArn;
    public PutComponentPolicyResponse withComponentArn(String componentArn) {
        this.componentArn = componentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public PutComponentPolicyResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}