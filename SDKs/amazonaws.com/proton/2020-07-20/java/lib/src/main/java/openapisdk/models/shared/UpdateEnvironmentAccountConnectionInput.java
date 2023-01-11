package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEnvironmentAccountConnectionInput {
    @JsonProperty("id")
    public String id;
    public UpdateEnvironmentAccountConnectionInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateEnvironmentAccountConnectionInput withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}