package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Toolchain
 * The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
**/
public class Toolchain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public Toolchain withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("source")
    public ToolchainSource source;
    public Toolchain withSource(ToolchainSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackParameters")
    public java.util.Map<String, String> stackParameters;
    public Toolchain withStackParameters(java.util.Map<String, String> stackParameters) {
        this.stackParameters = stackParameters;
        return this;
    }
}