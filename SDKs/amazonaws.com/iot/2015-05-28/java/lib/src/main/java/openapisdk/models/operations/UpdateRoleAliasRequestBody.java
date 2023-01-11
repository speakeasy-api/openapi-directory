package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRoleAliasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialDurationSeconds")
    public Long credentialDurationSeconds;
    public UpdateRoleAliasRequestBody withCredentialDurationSeconds(Long credentialDurationSeconds) {
        this.credentialDurationSeconds = credentialDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateRoleAliasRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}