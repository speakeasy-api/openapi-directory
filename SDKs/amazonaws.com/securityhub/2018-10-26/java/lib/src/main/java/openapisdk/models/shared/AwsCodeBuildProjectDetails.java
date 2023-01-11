package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCodeBuildProjectDetails
 * Information about an CodeBuild project.
**/
public class AwsCodeBuildProjectDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public String encryptionKey;
    public AwsCodeBuildProjectDetails withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public AwsCodeBuildProjectEnvironment environment;
    public AwsCodeBuildProjectDetails withEnvironment(AwsCodeBuildProjectEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsCodeBuildProjectDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceRole")
    public String serviceRole;
    public AwsCodeBuildProjectDetails withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Source")
    public AwsCodeBuildProjectSource source;
    public AwsCodeBuildProjectDetails withSource(AwsCodeBuildProjectSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public AwsCodeBuildProjectVpcConfig vpcConfig;
    public AwsCodeBuildProjectDetails withVpcConfig(AwsCodeBuildProjectVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}