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
 * PullRequestEvent
 * Returns information about a pull request event.
**/
public class PullRequestEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actorArn")
    public String actorArn;
    public PullRequestEvent withActorArn(String actorArn) {
        this.actorArn = actorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleEventMetadata")
    public ApprovalRuleEventMetadata approvalRuleEventMetadata;
    public PullRequestEvent withApprovalRuleEventMetadata(ApprovalRuleEventMetadata approvalRuleEventMetadata) {
        this.approvalRuleEventMetadata = approvalRuleEventMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleOverriddenEventMetadata")
    public ApprovalRuleOverriddenEventMetadata approvalRuleOverriddenEventMetadata;
    public PullRequestEvent withApprovalRuleOverriddenEventMetadata(ApprovalRuleOverriddenEventMetadata approvalRuleOverriddenEventMetadata) {
        this.approvalRuleOverriddenEventMetadata = approvalRuleOverriddenEventMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalStateChangedEventMetadata")
    public ApprovalStateChangedEventMetadata approvalStateChangedEventMetadata;
    public PullRequestEvent withApprovalStateChangedEventMetadata(ApprovalStateChangedEventMetadata approvalStateChangedEventMetadata) {
        this.approvalStateChangedEventMetadata = approvalStateChangedEventMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventDate")
    public OffsetDateTime eventDate;
    public PullRequestEvent withEventDate(OffsetDateTime eventDate) {
        this.eventDate = eventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestCreatedEventMetadata")
    public PullRequestCreatedEventMetadata pullRequestCreatedEventMetadata;
    public PullRequestEvent withPullRequestCreatedEventMetadata(PullRequestCreatedEventMetadata pullRequestCreatedEventMetadata) {
        this.pullRequestCreatedEventMetadata = pullRequestCreatedEventMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestEventType")
    public PullRequestEventTypeEnum pullRequestEventType;
    public PullRequestEvent withPullRequestEventType(PullRequestEventTypeEnum pullRequestEventType) {
        this.pullRequestEventType = pullRequestEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public PullRequestEvent withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestMergedStateChangedEventMetadata")
    public PullRequestMergedStateChangedEventMetadata pullRequestMergedStateChangedEventMetadata;
    public PullRequestEvent withPullRequestMergedStateChangedEventMetadata(PullRequestMergedStateChangedEventMetadata pullRequestMergedStateChangedEventMetadata) {
        this.pullRequestMergedStateChangedEventMetadata = pullRequestMergedStateChangedEventMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestSourceReferenceUpdatedEventMetadata")
    public PullRequestSourceReferenceUpdatedEventMetadata pullRequestSourceReferenceUpdatedEventMetadata;
    public PullRequestEvent withPullRequestSourceReferenceUpdatedEventMetadata(PullRequestSourceReferenceUpdatedEventMetadata pullRequestSourceReferenceUpdatedEventMetadata) {
        this.pullRequestSourceReferenceUpdatedEventMetadata = pullRequestSourceReferenceUpdatedEventMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestStatusChangedEventMetadata")
    public PullRequestStatusChangedEventMetadata pullRequestStatusChangedEventMetadata;
    public PullRequestEvent withPullRequestStatusChangedEventMetadata(PullRequestStatusChangedEventMetadata pullRequestStatusChangedEventMetadata) {
        this.pullRequestStatusChangedEventMetadata = pullRequestStatusChangedEventMetadata;
        return this;
    }
}