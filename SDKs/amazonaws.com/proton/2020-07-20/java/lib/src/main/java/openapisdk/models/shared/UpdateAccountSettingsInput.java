package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineServiceRoleArn")
    public String pipelineServiceRoleArn;
    public UpdateAccountSettingsInput withPipelineServiceRoleArn(String pipelineServiceRoleArn) {
        this.pipelineServiceRoleArn = pipelineServiceRoleArn;
        return this;
    }
}