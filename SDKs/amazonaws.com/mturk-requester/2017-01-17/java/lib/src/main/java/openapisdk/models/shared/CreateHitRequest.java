package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHitRequest {
    @JsonProperty("AssignmentDurationInSeconds")
    public Long assignmentDurationInSeconds;
    public CreateHitRequest withAssignmentDurationInSeconds(Long assignmentDurationInSeconds) {
        this.assignmentDurationInSeconds = assignmentDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentReviewPolicy")
    public ReviewPolicy assignmentReviewPolicy;
    public CreateHitRequest withAssignmentReviewPolicy(ReviewPolicy assignmentReviewPolicy) {
        this.assignmentReviewPolicy = assignmentReviewPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoApprovalDelayInSeconds")
    public Long autoApprovalDelayInSeconds;
    public CreateHitRequest withAutoApprovalDelayInSeconds(Long autoApprovalDelayInSeconds) {
        this.autoApprovalDelayInSeconds = autoApprovalDelayInSeconds;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public CreateHitRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITLayoutId")
    public String hitLayoutId;
    public CreateHitRequest withHitLayoutId(String hitLayoutId) {
        this.hitLayoutId = hitLayoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITLayoutParameters")
    public HitLayoutParameter[] hitLayoutParameters;
    public CreateHitRequest withHitLayoutParameters(HitLayoutParameter[] hitLayoutParameters) {
        this.hitLayoutParameters = hitLayoutParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITReviewPolicy")
    public ReviewPolicy hitReviewPolicy;
    public CreateHitRequest withHitReviewPolicy(ReviewPolicy hitReviewPolicy) {
        this.hitReviewPolicy = hitReviewPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keywords")
    public String keywords;
    public CreateHitRequest withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonProperty("LifetimeInSeconds")
    public Long lifetimeInSeconds;
    public CreateHitRequest withLifetimeInSeconds(Long lifetimeInSeconds) {
        this.lifetimeInSeconds = lifetimeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAssignments")
    public Long maxAssignments;
    public CreateHitRequest withMaxAssignments(Long maxAssignments) {
        this.maxAssignments = maxAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationRequirements")
    public QualificationRequirement[] qualificationRequirements;
    public CreateHitRequest withQualificationRequirements(QualificationRequirement[] qualificationRequirements) {
        this.qualificationRequirements = qualificationRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Question")
    public String question;
    public CreateHitRequest withQuestion(String question) {
        this.question = question;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequesterAnnotation")
    public String requesterAnnotation;
    public CreateHitRequest withRequesterAnnotation(String requesterAnnotation) {
        this.requesterAnnotation = requesterAnnotation;
        return this;
    }
    @JsonProperty("Reward")
    public String reward;
    public CreateHitRequest withReward(String reward) {
        this.reward = reward;
        return this;
    }
    @JsonProperty("Title")
    public String title;
    public CreateHitRequest withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniqueRequestToken")
    public String uniqueRequestToken;
    public CreateHitRequest withUniqueRequestToken(String uniqueRequestToken) {
        this.uniqueRequestToken = uniqueRequestToken;
        return this;
    }
}