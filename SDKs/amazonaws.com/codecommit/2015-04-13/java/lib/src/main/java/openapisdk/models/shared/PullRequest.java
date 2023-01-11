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
 * PullRequest
 * Returns information about a pull request.
**/
public class PullRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRules")
    public ApprovalRule[] approvalRules;
    public PullRequest withApprovalRules(ApprovalRule[] approvalRules) {
        this.approvalRules = approvalRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorArn")
    public String authorArn;
    public PullRequest withAuthorArn(String authorArn) {
        this.authorArn = authorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public PullRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public PullRequest withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PullRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastActivityDate")
    public OffsetDateTime lastActivityDate;
    public PullRequest withLastActivityDate(OffsetDateTime lastActivityDate) {
        this.lastActivityDate = lastActivityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public PullRequest withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestStatus")
    public PullRequestStatusEnumEnum pullRequestStatus;
    public PullRequest withPullRequestStatus(PullRequestStatusEnumEnum pullRequestStatus) {
        this.pullRequestStatus = pullRequestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestTargets")
    public PullRequestTarget[] pullRequestTargets;
    public PullRequest withPullRequestTargets(PullRequestTarget[] pullRequestTargets) {
        this.pullRequestTargets = pullRequestTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public PullRequest withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PullRequest withTitle(String title) {
        this.title = title;
        return this;
    }
}