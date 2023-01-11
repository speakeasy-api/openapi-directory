package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CheckSuite
 * A suite of checks performed on the code of a given code change
**/
public class CheckSuite {
    @JsonProperty("after")
    public String after;
    public CheckSuite withAfter(String after) {
        this.after = after;
        return this;
    }
    @JsonProperty("app")
    public java.util.Map<String, Object> app;
    public CheckSuite withApp(java.util.Map<String, Object> app) {
        this.app = app;
        return this;
    }
    @JsonProperty("before")
    public String before;
    public CheckSuite withBefore(String before) {
        this.before = before;
        return this;
    }
    @JsonProperty("check_runs_url")
    public String checkRunsUrl;
    public CheckSuite withCheckRunsUrl(String checkRunsUrl) {
        this.checkRunsUrl = checkRunsUrl;
        return this;
    }
    @JsonProperty("conclusion")
    public CheckSuiteConclusionEnum conclusion;
    public CheckSuite withConclusion(CheckSuiteConclusionEnum conclusion) {
        this.conclusion = conclusion;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public CheckSuite withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("head_branch")
    public String headBranch;
    public CheckSuite withHeadBranch(String headBranch) {
        this.headBranch = headBranch;
        return this;
    }
    @JsonProperty("head_commit")
    public SimpleCommit headCommit;
    public CheckSuite withHeadCommit(SimpleCommit headCommit) {
        this.headCommit = headCommit;
        return this;
    }
    @JsonProperty("head_sha")
    public String headSha;
    public CheckSuite withHeadSha(String headSha) {
        this.headSha = headSha;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public CheckSuite withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latest_check_runs_count")
    public Long latestCheckRunsCount;
    public CheckSuite withLatestCheckRunsCount(Long latestCheckRunsCount) {
        this.latestCheckRunsCount = latestCheckRunsCount;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public CheckSuite withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("pull_requests")
    public PullRequestMinimal[] pullRequests;
    public CheckSuite withPullRequests(PullRequestMinimal[] pullRequests) {
        this.pullRequests = pullRequests;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public CheckSuite withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("status")
    public CheckSuiteStatusEnum status;
    public CheckSuite withStatus(CheckSuiteStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public CheckSuite withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CheckSuite withUrl(String url) {
        this.url = url;
        return this;
    }
}