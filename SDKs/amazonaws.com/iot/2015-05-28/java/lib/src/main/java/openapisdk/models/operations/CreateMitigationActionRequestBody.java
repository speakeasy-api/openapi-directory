package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMitigationActionRequestBody {
    @JsonProperty("actionParams")
    public CreateMitigationActionRequestBodyActionParams actionParams;
    public CreateMitigationActionRequestBody withActionParams(CreateMitigationActionRequestBodyActionParams actionParams) {
        this.actionParams = actionParams;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateMitigationActionRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateMitigationActionRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}