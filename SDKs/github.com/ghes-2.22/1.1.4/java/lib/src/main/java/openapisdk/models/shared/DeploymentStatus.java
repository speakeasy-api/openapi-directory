package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DeploymentStatus
 * The status of a deployment.
**/
public class DeploymentStatus {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public DeploymentStatus withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public DeploymentStatusSimpleUser creator;
    public DeploymentStatus withCreator(DeploymentStatusSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("deployment_url")
    public String deploymentUrl;
    public DeploymentStatus withDeploymentUrl(String deploymentUrl) {
        this.deploymentUrl = deploymentUrl;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public DeploymentStatus withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;
    public DeploymentStatus withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_url")
    public String environmentUrl;
    public DeploymentStatus withEnvironmentUrl(String environmentUrl) {
        this.environmentUrl = environmentUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public DeploymentStatus withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_url")
    public String logUrl;
    public DeploymentStatus withLogUrl(String logUrl) {
        this.logUrl = logUrl;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public DeploymentStatus withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performed_via_github_app")
    public java.util.Map<String, Object> performedViaGithubApp;
    public DeploymentStatus withPerformedViaGithubApp(java.util.Map<String, Object> performedViaGithubApp) {
        this.performedViaGithubApp = performedViaGithubApp;
        return this;
    }
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public DeploymentStatus withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("state")
    public DeploymentStatusStateEnum state;
    public DeploymentStatus withState(DeploymentStatusStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("target_url")
    public String targetUrl;
    public DeploymentStatus withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public DeploymentStatus withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public DeploymentStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}