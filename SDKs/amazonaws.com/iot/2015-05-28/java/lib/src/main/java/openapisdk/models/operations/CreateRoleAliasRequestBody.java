package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRoleAliasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialDurationSeconds")
    public Long credentialDurationSeconds;
    public CreateRoleAliasRequestBody withCredentialDurationSeconds(Long credentialDurationSeconds) {
        this.credentialDurationSeconds = credentialDurationSeconds;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateRoleAliasRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateRoleAliasRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}