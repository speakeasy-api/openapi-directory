package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAppRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public CreateAppRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationConfig")
    public CreateAppRequestBodyAutoBranchCreationConfig autoBranchCreationConfig;
    public CreateAppRequestBody withAutoBranchCreationConfig(CreateAppRequestBodyAutoBranchCreationConfig autoBranchCreationConfig) {
        this.autoBranchCreationConfig = autoBranchCreationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationPatterns")
    public String[] autoBranchCreationPatterns;
    public CreateAppRequestBody withAutoBranchCreationPatterns(String[] autoBranchCreationPatterns) {
        this.autoBranchCreationPatterns = autoBranchCreationPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;
    public CreateAppRequestBody withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;
    public CreateAppRequestBody withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customHeaders")
    public String customHeaders;
    public CreateAppRequestBody withCustomHeaders(String customHeaders) {
        this.customHeaders = customHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRules")
    public openapisdk.models.shared.CustomRule[] customRules;
    public CreateAppRequestBody withCustomRules(openapisdk.models.shared.CustomRule[] customRules) {
        this.customRules = customRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAppRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBranchCreation")
    public Boolean enableAutoBranchCreation;
    public CreateAppRequestBody withEnableAutoBranchCreation(Boolean enableAutoBranchCreation) {
        this.enableAutoBranchCreation = enableAutoBranchCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;
    public CreateAppRequestBody withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoBuild")
    public Boolean enableBranchAutoBuild;
    public CreateAppRequestBody withEnableBranchAutoBuild(Boolean enableBranchAutoBuild) {
        this.enableBranchAutoBuild = enableBranchAutoBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoDeletion")
    public Boolean enableBranchAutoDeletion;
    public CreateAppRequestBody withEnableBranchAutoDeletion(Boolean enableBranchAutoDeletion) {
        this.enableBranchAutoDeletion = enableBranchAutoDeletion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public CreateAppRequestBody withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamServiceRoleArn")
    public String iamServiceRoleArn;
    public CreateAppRequestBody withIamServiceRoleArn(String iamServiceRoleArn) {
        this.iamServiceRoleArn = iamServiceRoleArn;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAppRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthToken")
    public String oauthToken;
    public CreateAppRequestBody withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public CreateAppRequestBodyPlatformEnum platform;
    public CreateAppRequestBody withPlatform(CreateAppRequestBodyPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;
    public CreateAppRequestBody withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAppRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}