package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHitTypeRequest {
    @JsonProperty("AssignmentDurationInSeconds")
    public Long assignmentDurationInSeconds;
    public CreateHitTypeRequest withAssignmentDurationInSeconds(Long assignmentDurationInSeconds) {
        this.assignmentDurationInSeconds = assignmentDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoApprovalDelayInSeconds")
    public Long autoApprovalDelayInSeconds;
    public CreateHitTypeRequest withAutoApprovalDelayInSeconds(Long autoApprovalDelayInSeconds) {
        this.autoApprovalDelayInSeconds = autoApprovalDelayInSeconds;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public CreateHitTypeRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keywords")
    public String keywords;
    public CreateHitTypeRequest withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationRequirements")
    public QualificationRequirement[] qualificationRequirements;
    public CreateHitTypeRequest withQualificationRequirements(QualificationRequirement[] qualificationRequirements) {
        this.qualificationRequirements = qualificationRequirements;
        return this;
    }
    @JsonProperty("Reward")
    public String reward;
    public CreateHitTypeRequest withReward(String reward) {
        this.reward = reward;
        return this;
    }
    @JsonProperty("Title")
    public String title;
    public CreateHitTypeRequest withTitle(String title) {
        this.title = title;
        return this;
    }
}