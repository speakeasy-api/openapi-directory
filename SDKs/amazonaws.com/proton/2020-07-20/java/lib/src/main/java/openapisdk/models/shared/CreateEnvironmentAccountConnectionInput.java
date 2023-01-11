package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentAccountConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateEnvironmentAccountConnectionInput withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("environmentName")
    public String environmentName;
    public CreateEnvironmentAccountConnectionInput withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @JsonProperty("managementAccountId")
    public String managementAccountId;
    public CreateEnvironmentAccountConnectionInput withManagementAccountId(String managementAccountId) {
        this.managementAccountId = managementAccountId;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateEnvironmentAccountConnectionInput withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}