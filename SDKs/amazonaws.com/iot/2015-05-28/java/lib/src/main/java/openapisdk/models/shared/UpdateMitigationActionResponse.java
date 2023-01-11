package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMitigationActionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionArn")
    public String actionArn;
    public UpdateMitigationActionResponse withActionArn(String actionArn) {
        this.actionArn = actionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionId")
    public String actionId;
    public UpdateMitigationActionResponse withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
}