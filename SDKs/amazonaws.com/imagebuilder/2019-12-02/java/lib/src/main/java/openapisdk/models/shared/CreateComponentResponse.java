package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateComponentResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentBuildVersionArn")
    public String componentBuildVersionArn;
    public CreateComponentResponse withComponentBuildVersionArn(String componentBuildVersionArn) {
        this.componentBuildVersionArn = componentBuildVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public CreateComponentResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}