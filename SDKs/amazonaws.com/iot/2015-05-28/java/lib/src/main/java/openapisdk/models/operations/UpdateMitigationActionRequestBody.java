package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMitigationActionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionParams")
    public UpdateMitigationActionRequestBodyActionParams actionParams;
    public UpdateMitigationActionRequestBody withActionParams(UpdateMitigationActionRequestBodyActionParams actionParams) {
        this.actionParams = actionParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateMitigationActionRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}