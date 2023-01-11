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
 * WorkflowRun
 * An invocation of a workflow
**/
public class WorkflowRun {
    @JsonProperty("artifacts_url")
    public String artifactsUrl;
    public WorkflowRun withArtifactsUrl(String artifactsUrl) {
        this.artifactsUrl = artifactsUrl;
        return this;
    }
    @JsonProperty("cancel_url")
    public String cancelUrl;
    public WorkflowRun withCancelUrl(String cancelUrl) {
        this.cancelUrl = cancelUrl;
        return this;
    }
    @JsonProperty("check_suite_url")
    public String checkSuiteUrl;
    public WorkflowRun withCheckSuiteUrl(String checkSuiteUrl) {
        this.checkSuiteUrl = checkSuiteUrl;
        return this;
    }
    @JsonProperty("conclusion")
    public String conclusion;
    public WorkflowRun withConclusion(String conclusion) {
        this.conclusion = conclusion;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public WorkflowRun withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("event")
    public String event;
    public WorkflowRun withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonProperty("head_branch")
    public String headBranch;
    public WorkflowRun withHeadBranch(String headBranch) {
        this.headBranch = headBranch;
        return this;
    }
    @JsonProperty("head_commit")
    public SimpleCommit headCommit;
    public WorkflowRun withHeadCommit(SimpleCommit headCommit) {
        this.headCommit = headCommit;
        return this;
    }
    @JsonProperty("head_repository")
    public MinimalRepository headRepository;
    public WorkflowRun withHeadRepository(MinimalRepository headRepository) {
        this.headRepository = headRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("head_repository_id")
    public Long headRepositoryId;
    public WorkflowRun withHeadRepositoryId(Long headRepositoryId) {
        this.headRepositoryId = headRepositoryId;
        return this;
    }
    @JsonProperty("head_sha")
    public String headSha;
    public WorkflowRun withHeadSha(String headSha) {
        this.headSha = headSha;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public WorkflowRun withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public WorkflowRun withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("jobs_url")
    public String jobsUrl;
    public WorkflowRun withJobsUrl(String jobsUrl) {
        this.jobsUrl = jobsUrl;
        return this;
    }
    @JsonProperty("logs_url")
    public String logsUrl;
    public WorkflowRun withLogsUrl(String logsUrl) {
        this.logsUrl = logsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkflowRun withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public WorkflowRun withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("pull_requests")
    public PullRequestMinimal[] pullRequests;
    public WorkflowRun withPullRequests(PullRequestMinimal[] pullRequests) {
        this.pullRequests = pullRequests;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public WorkflowRun withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("rerun_url")
    public String rerunUrl;
    public WorkflowRun withRerunUrl(String rerunUrl) {
        this.rerunUrl = rerunUrl;
        return this;
    }
    @JsonProperty("run_number")
    public Long runNumber;
    public WorkflowRun withRunNumber(Long runNumber) {
        this.runNumber = runNumber;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public WorkflowRun withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public WorkflowRun withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public WorkflowRun withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("workflow_id")
    public Long workflowId;
    public WorkflowRun withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
    @JsonProperty("workflow_url")
    public String workflowUrl;
    public WorkflowRun withWorkflowUrl(String workflowUrl) {
        this.workflowUrl = workflowUrl;
        return this;
    }
}