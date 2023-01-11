package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAppRequestBodyAutoBranchCreationConfig
 *  Describes the automated branch creation configuration. 
**/
public class CreateAppRequestBodyAutoBranchCreationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;
    public CreateAppRequestBodyAutoBranchCreationConfig withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;
    public CreateAppRequestBodyAutoBranchCreationConfig withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBuild")
    public Boolean enableAutoBuild;
    public CreateAppRequestBodyAutoBranchCreationConfig withEnableAutoBuild(Boolean enableAutoBuild) {
        this.enableAutoBuild = enableAutoBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;
    public CreateAppRequestBodyAutoBranchCreationConfig withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePerformanceMode")
    public Boolean enablePerformanceMode;
    public CreateAppRequestBodyAutoBranchCreationConfig withEnablePerformanceMode(Boolean enablePerformanceMode) {
        this.enablePerformanceMode = enablePerformanceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePullRequestPreview")
    public Boolean enablePullRequestPreview;
    public CreateAppRequestBodyAutoBranchCreationConfig withEnablePullRequestPreview(Boolean enablePullRequestPreview) {
        this.enablePullRequestPreview = enablePullRequestPreview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public CreateAppRequestBodyAutoBranchCreationConfig withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public String framework;
    public CreateAppRequestBodyAutoBranchCreationConfig withFramework(String framework) {
        this.framework = framework;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestEnvironmentName")
    public String pullRequestEnvironmentName;
    public CreateAppRequestBodyAutoBranchCreationConfig withPullRequestEnvironmentName(String pullRequestEnvironmentName) {
        this.pullRequestEnvironmentName = pullRequestEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public openapisdk.models.shared.StageEnum stage;
    public CreateAppRequestBodyAutoBranchCreationConfig withStage(openapisdk.models.shared.StageEnum stage) {
        this.stage = stage;
        return this;
    }
}