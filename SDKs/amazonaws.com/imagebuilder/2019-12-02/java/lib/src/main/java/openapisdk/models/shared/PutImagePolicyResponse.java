package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImagePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageArn")
    public String imageArn;
    public PutImagePolicyResponse withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public PutImagePolicyResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}