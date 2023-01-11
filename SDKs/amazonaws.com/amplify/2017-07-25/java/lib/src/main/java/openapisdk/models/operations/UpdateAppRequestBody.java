package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAppRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public UpdateAppRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationConfig")
    public UpdateAppRequestBodyAutoBranchCreationConfig autoBranchCreationConfig;
    public UpdateAppRequestBody withAutoBranchCreationConfig(UpdateAppRequestBodyAutoBranchCreationConfig autoBranchCreationConfig) {
        this.autoBranchCreationConfig = autoBranchCreationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationPatterns")
    public String[] autoBranchCreationPatterns;
    public UpdateAppRequestBody withAutoBranchCreationPatterns(String[] autoBranchCreationPatterns) {
        this.autoBranchCreationPatterns = autoBranchCreationPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;
    public UpdateAppRequestBody withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;
    public UpdateAppRequestBody withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customHeaders")
    public String customHeaders;
    public UpdateAppRequestBody withCustomHeaders(String customHeaders) {
        this.customHeaders = customHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRules")
    public openapisdk.models.shared.CustomRule[] customRules;
    public UpdateAppRequestBody withCustomRules(openapisdk.models.shared.CustomRule[] customRules) {
        this.customRules = customRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateAppRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBranchCreation")
    public Boolean enableAutoBranchCreation;
    public UpdateAppRequestBody withEnableAutoBranchCreation(Boolean enableAutoBranchCreation) {
        this.enableAutoBranchCreation = enableAutoBranchCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;
    public UpdateAppRequestBody withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoBuild")
    public Boolean enableBranchAutoBuild;
    public UpdateAppRequestBody withEnableBranchAutoBuild(Boolean enableBranchAutoBuild) {
        this.enableBranchAutoBuild = enableBranchAutoBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoDeletion")
    public Boolean enableBranchAutoDeletion;
    public UpdateAppRequestBody withEnableBranchAutoDeletion(Boolean enableBranchAutoDeletion) {
        this.enableBranchAutoDeletion = enableBranchAutoDeletion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public UpdateAppRequestBody withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamServiceRoleArn")
    public String iamServiceRoleArn;
    public UpdateAppRequestBody withIamServiceRoleArn(String iamServiceRoleArn) {
        this.iamServiceRoleArn = iamServiceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateAppRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthToken")
    public String oauthToken;
    public UpdateAppRequestBody withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public UpdateAppRequestBodyPlatformEnum platform;
    public UpdateAppRequestBody withPlatform(UpdateAppRequestBodyPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;
    public UpdateAppRequestBody withRepository(String repository) {
        this.repository = repository;
        return this;
    }
}