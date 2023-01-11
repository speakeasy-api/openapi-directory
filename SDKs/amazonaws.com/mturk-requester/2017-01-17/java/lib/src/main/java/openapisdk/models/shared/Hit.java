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
 * Hit
 *  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
**/
public class Hit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentDurationInSeconds")
    public Long assignmentDurationInSeconds;
    public Hit withAssignmentDurationInSeconds(Long assignmentDurationInSeconds) {
        this.assignmentDurationInSeconds = assignmentDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoApprovalDelayInSeconds")
    public Long autoApprovalDelayInSeconds;
    public Hit withAutoApprovalDelayInSeconds(Long autoApprovalDelayInSeconds) {
        this.autoApprovalDelayInSeconds = autoApprovalDelayInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Hit withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Hit withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Expiration")
    public OffsetDateTime expiration;
    public Hit withExpiration(OffsetDateTime expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITGroupId")
    public String hitGroupId;
    public Hit withHitGroupId(String hitGroupId) {
        this.hitGroupId = hitGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITId")
    public String hitId;
    public Hit withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITLayoutId")
    public String hitLayoutId;
    public Hit withHitLayoutId(String hitLayoutId) {
        this.hitLayoutId = hitLayoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITReviewStatus")
    public HitReviewStatusEnum hitReviewStatus;
    public Hit withHitReviewStatus(HitReviewStatusEnum hitReviewStatus) {
        this.hitReviewStatus = hitReviewStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITStatus")
    public HitStatusEnum hitStatus;
    public Hit withHitStatus(HitStatusEnum hitStatus) {
        this.hitStatus = hitStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITTypeId")
    public String hitTypeId;
    public Hit withHitTypeId(String hitTypeId) {
        this.hitTypeId = hitTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keywords")
    public String keywords;
    public Hit withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAssignments")
    public Long maxAssignments;
    public Hit withMaxAssignments(Long maxAssignments) {
        this.maxAssignments = maxAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfAssignmentsAvailable")
    public Long numberOfAssignmentsAvailable;
    public Hit withNumberOfAssignmentsAvailable(Long numberOfAssignmentsAvailable) {
        this.numberOfAssignmentsAvailable = numberOfAssignmentsAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfAssignmentsCompleted")
    public Long numberOfAssignmentsCompleted;
    public Hit withNumberOfAssignmentsCompleted(Long numberOfAssignmentsCompleted) {
        this.numberOfAssignmentsCompleted = numberOfAssignmentsCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfAssignmentsPending")
    public Long numberOfAssignmentsPending;
    public Hit withNumberOfAssignmentsPending(Long numberOfAssignmentsPending) {
        this.numberOfAssignmentsPending = numberOfAssignmentsPending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationRequirements")
    public QualificationRequirement[] qualificationRequirements;
    public Hit withQualificationRequirements(QualificationRequirement[] qualificationRequirements) {
        this.qualificationRequirements = qualificationRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Question")
    public String question;
    public Hit withQuestion(String question) {
        this.question = question;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequesterAnnotation")
    public String requesterAnnotation;
    public Hit withRequesterAnnotation(String requesterAnnotation) {
        this.requesterAnnotation = requesterAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reward")
    public String reward;
    public Hit withReward(String reward) {
        this.reward = reward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public Hit withTitle(String title) {
        this.title = title;
        return this;
    }
}