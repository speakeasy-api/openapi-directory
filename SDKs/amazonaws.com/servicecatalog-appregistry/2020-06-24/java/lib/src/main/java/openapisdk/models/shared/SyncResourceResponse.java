package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SyncResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionTaken")
    public SyncActionEnum actionTaken;
    public SyncResourceResponse withActionTaken(SyncActionEnum actionTaken) {
        this.actionTaken = actionTaken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationArn")
    public String applicationArn;
    public SyncResourceResponse withApplicationArn(String applicationArn) {
        this.applicationArn = applicationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public SyncResourceResponse withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}