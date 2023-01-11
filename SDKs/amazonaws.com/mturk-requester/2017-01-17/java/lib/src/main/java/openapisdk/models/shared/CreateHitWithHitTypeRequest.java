package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHitWithHitTypeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentReviewPolicy")
    public ReviewPolicy assignmentReviewPolicy;
    public CreateHitWithHitTypeRequest withAssignmentReviewPolicy(ReviewPolicy assignmentReviewPolicy) {
        this.assignmentReviewPolicy = assignmentReviewPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITLayoutId")
    public String hitLayoutId;
    public CreateHitWithHitTypeRequest withHitLayoutId(String hitLayoutId) {
        this.hitLayoutId = hitLayoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITLayoutParameters")
    public HitLayoutParameter[] hitLayoutParameters;
    public CreateHitWithHitTypeRequest withHitLayoutParameters(HitLayoutParameter[] hitLayoutParameters) {
        this.hitLayoutParameters = hitLayoutParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITReviewPolicy")
    public ReviewPolicy hitReviewPolicy;
    public CreateHitWithHitTypeRequest withHitReviewPolicy(ReviewPolicy hitReviewPolicy) {
        this.hitReviewPolicy = hitReviewPolicy;
        return this;
    }
    @JsonProperty("HITTypeId")
    public String hitTypeId;
    public CreateHitWithHitTypeRequest withHitTypeId(String hitTypeId) {
        this.hitTypeId = hitTypeId;
        return this;
    }
    @JsonProperty("LifetimeInSeconds")
    public Long lifetimeInSeconds;
    public CreateHitWithHitTypeRequest withLifetimeInSeconds(Long lifetimeInSeconds) {
        this.lifetimeInSeconds = lifetimeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAssignments")
    public Long maxAssignments;
    public CreateHitWithHitTypeRequest withMaxAssignments(Long maxAssignments) {
        this.maxAssignments = maxAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Question")
    public String question;
    public CreateHitWithHitTypeRequest withQuestion(String question) {
        this.question = question;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequesterAnnotation")
    public String requesterAnnotation;
    public CreateHitWithHitTypeRequest withRequesterAnnotation(String requesterAnnotation) {
        this.requesterAnnotation = requesterAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniqueRequestToken")
    public String uniqueRequestToken;
    public CreateHitWithHitTypeRequest withUniqueRequestToken(String uniqueRequestToken) {
        this.uniqueRequestToken = uniqueRequestToken;
        return this;
    }
}