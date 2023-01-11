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
 * CheckRun
 * A check performed on the code of a given code change
**/
public class CheckRun {
    @JsonProperty("app")
    public java.util.Map<String, Object> app;
    public CheckRun withApp(java.util.Map<String, Object> app) {
        this.app = app;
        return this;
    }
    @JsonProperty("check_suite")
    public CheckRunCheckSuite checkSuite;
    public CheckRun withCheckSuite(CheckRunCheckSuite checkSuite) {
        this.checkSuite = checkSuite;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public CheckRun withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonProperty("conclusion")
    public CheckRunConclusionEnum conclusion;
    public CheckRun withConclusion(CheckRunConclusionEnum conclusion) {
        this.conclusion = conclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public DeploymentSimple deployment;
    public CheckRun withDeployment(DeploymentSimple deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonProperty("details_url")
    public String detailsUrl;
    public CheckRun withDetailsUrl(String detailsUrl) {
        this.detailsUrl = detailsUrl;
        return this;
    }
    @JsonProperty("external_id")
    public String externalId;
    public CheckRun withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("head_sha")
    public String headSha;
    public CheckRun withHeadSha(String headSha) {
        this.headSha = headSha;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public CheckRun withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public CheckRun withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CheckRun withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public CheckRun withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("output")
    public CheckRunOutput output;
    public CheckRun withOutput(CheckRunOutput output) {
        this.output = output;
        return this;
    }
    @JsonProperty("pull_requests")
    public Object pullRequests;
    public CheckRun withPullRequests(Object pullRequests) {
        this.pullRequests = pullRequests;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public CheckRun withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("status")
    public CheckRunStatusEnum status;
    public CheckRun withStatus(CheckRunStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CheckRun withUrl(String url) {
        this.url = url;
        return this;
    }
}