package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings
 * The AWS Proton pipeline service role data.
**/
public class AccountSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineServiceRoleArn")
    public String pipelineServiceRoleArn;
    public AccountSettings withPipelineServiceRoleArn(String pipelineServiceRoleArn) {
        this.pipelineServiceRoleArn = pipelineServiceRoleArn;
        return this;
    }
}