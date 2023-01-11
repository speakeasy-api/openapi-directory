package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentBuildVersionArn")
    public String componentBuildVersionArn;
    public DeleteComponentResponse withComponentBuildVersionArn(String componentBuildVersionArn) {
        this.componentBuildVersionArn = componentBuildVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteComponentResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}