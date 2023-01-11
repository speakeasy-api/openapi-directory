package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMitigationActionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionArn")
    public String actionArn;
    public CreateMitigationActionResponse withActionArn(String actionArn) {
        this.actionArn = actionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionId")
    public String actionId;
    public CreateMitigationActionResponse withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
}