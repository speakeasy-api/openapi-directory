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
 * DeploymentSimple
 * A deployment created as the result of an Actions check run from a workflow that references an environment
**/
public class DeploymentSimple {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public DeploymentSimple withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public DeploymentSimple withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("environment")
    public String environment;
    public DeploymentSimple withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public DeploymentSimple withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public DeploymentSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_environment")
    public String originalEnvironment;
    public DeploymentSimple withOriginalEnvironment(String originalEnvironment) {
        this.originalEnvironment = originalEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performed_via_github_app")
    public java.util.Map<String, Object> performedViaGithubApp;
    public DeploymentSimple withPerformedViaGithubApp(java.util.Map<String, Object> performedViaGithubApp) {
        this.performedViaGithubApp = performedViaGithubApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production_environment")
    public Boolean productionEnvironment;
    public DeploymentSimple withProductionEnvironment(Boolean productionEnvironment) {
        this.productionEnvironment = productionEnvironment;
        return this;
    }
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public DeploymentSimple withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public DeploymentSimple withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonProperty("task")
    public String task;
    public DeploymentSimple withTask(String task) {
        this.task = task;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transient_environment")
    public Boolean transientEnvironment;
    public DeploymentSimple withTransientEnvironment(Boolean transientEnvironment) {
        this.transientEnvironment = transientEnvironment;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public DeploymentSimple withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public DeploymentSimple withUrl(String url) {
        this.url = url;
        return this;
    }
}