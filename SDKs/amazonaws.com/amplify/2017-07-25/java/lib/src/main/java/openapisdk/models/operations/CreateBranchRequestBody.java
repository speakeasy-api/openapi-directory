package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBranchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendEnvironmentArn")
    public String backendEnvironmentArn;
    public CreateBranchRequestBody withBackendEnvironmentArn(String backendEnvironmentArn) {
        this.backendEnvironmentArn = backendEnvironmentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;
    public CreateBranchRequestBody withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonProperty("branchName")
    public String branchName;
    public CreateBranchRequestBody withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;
    public CreateBranchRequestBody withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBranchRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CreateBranchRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBuild")
    public Boolean enableAutoBuild;
    public CreateBranchRequestBody withEnableAutoBuild(Boolean enableAutoBuild) {
        this.enableAutoBuild = enableAutoBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;
    public CreateBranchRequestBody withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableNotification")
    public Boolean enableNotification;
    public CreateBranchRequestBody withEnableNotification(Boolean enableNotification) {
        this.enableNotification = enableNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePerformanceMode")
    public Boolean enablePerformanceMode;
    public CreateBranchRequestBody withEnablePerformanceMode(Boolean enablePerformanceMode) {
        this.enablePerformanceMode = enablePerformanceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePullRequestPreview")
    public Boolean enablePullRequestPreview;
    public CreateBranchRequestBody withEnablePullRequestPreview(Boolean enablePullRequestPreview) {
        this.enablePullRequestPreview = enablePullRequestPreview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public CreateBranchRequestBody withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public String framework;
    public CreateBranchRequestBody withFramework(String framework) {
        this.framework = framework;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestEnvironmentName")
    public String pullRequestEnvironmentName;
    public CreateBranchRequestBody withPullRequestEnvironmentName(String pullRequestEnvironmentName) {
        this.pullRequestEnvironmentName = pullRequestEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public CreateBranchRequestBodyStageEnum stage;
    public CreateBranchRequestBody withStage(CreateBranchRequestBodyStageEnum stage) {
        this.stage = stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateBranchRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public CreateBranchRequestBody withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}