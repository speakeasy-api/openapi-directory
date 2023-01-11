package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsAssumeRole {
    @JsonProperty("assumeRoleArn")
    public String assumeRoleArn;
    public AwsAssumeRole withAssumeRoleArn(String assumeRoleArn) {
        this.assumeRoleArn = assumeRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationMode")
    public AwsAssumeRoleAuthenticationModeEnum authenticationMode;
    public AwsAssumeRole withAuthenticationMode(AwsAssumeRoleAuthenticationModeEnum authenticationMode) {
        this.authenticationMode = authenticationMode;
        return this;
    }
}