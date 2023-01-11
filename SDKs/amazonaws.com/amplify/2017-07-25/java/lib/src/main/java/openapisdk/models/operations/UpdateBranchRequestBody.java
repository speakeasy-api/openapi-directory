package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBranchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendEnvironmentArn")
    public String backendEnvironmentArn;
    public UpdateBranchRequestBody withBackendEnvironmentArn(String backendEnvironmentArn) {
        this.backendEnvironmentArn = backendEnvironmentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;
    public UpdateBranchRequestBody withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;
    public UpdateBranchRequestBody withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateBranchRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UpdateBranchRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBuild")
    public Boolean enableAutoBuild;
    public UpdateBranchRequestBody withEnableAutoBuild(Boolean enableAutoBuild) {
        this.enableAutoBuild = enableAutoBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;
    public UpdateBranchRequestBody withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableNotification")
    public Boolean enableNotification;
    public UpdateBranchRequestBody withEnableNotification(Boolean enableNotification) {
        this.enableNotification = enableNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePerformanceMode")
    public Boolean enablePerformanceMode;
    public UpdateBranchRequestBody withEnablePerformanceMode(Boolean enablePerformanceMode) {
        this.enablePerformanceMode = enablePerformanceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePullRequestPreview")
    public Boolean enablePullRequestPreview;
    public UpdateBranchRequestBody withEnablePullRequestPreview(Boolean enablePullRequestPreview) {
        this.enablePullRequestPreview = enablePullRequestPreview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public UpdateBranchRequestBody withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public String framework;
    public UpdateBranchRequestBody withFramework(String framework) {
        this.framework = framework;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestEnvironmentName")
    public String pullRequestEnvironmentName;
    public UpdateBranchRequestBody withPullRequestEnvironmentName(String pullRequestEnvironmentName) {
        this.pullRequestEnvironmentName = pullRequestEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public UpdateBranchRequestBodyStageEnum stage;
    public UpdateBranchRequestBody withStage(UpdateBranchRequestBodyStageEnum stage) {
        this.stage = stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public UpdateBranchRequestBody withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}