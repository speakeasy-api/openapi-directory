package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkloadRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public UpdateWorkloadRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchitecturalDesign")
    public String architecturalDesign;
    public UpdateWorkloadRequestBody withArchitecturalDesign(String architecturalDesign) {
        this.architecturalDesign = architecturalDesign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegions")
    public String[] awsRegions;
    public UpdateWorkloadRequestBody withAwsRegions(String[] awsRegions) {
        this.awsRegions = awsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateWorkloadRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public UpdateWorkloadRequestBodyEnvironmentEnum environment;
    public UpdateWorkloadRequestBody withEnvironment(UpdateWorkloadRequestBodyEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImprovementStatus")
    public UpdateWorkloadRequestBodyImprovementStatusEnum improvementStatus;
    public UpdateWorkloadRequestBody withImprovementStatus(UpdateWorkloadRequestBodyImprovementStatusEnum improvementStatus) {
        this.improvementStatus = improvementStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Industry")
    public String industry;
    public UpdateWorkloadRequestBody withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndustryType")
    public String industryType;
    public UpdateWorkloadRequestBody withIndustryType(String industryType) {
        this.industryType = industryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsReviewOwnerUpdateAcknowledged")
    public Boolean isReviewOwnerUpdateAcknowledged;
    public UpdateWorkloadRequestBody withIsReviewOwnerUpdateAcknowledged(Boolean isReviewOwnerUpdateAcknowledged) {
        this.isReviewOwnerUpdateAcknowledged = isReviewOwnerUpdateAcknowledged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonAwsRegions")
    public String[] nonAwsRegions;
    public UpdateWorkloadRequestBody withNonAwsRegions(String[] nonAwsRegions) {
        this.nonAwsRegions = nonAwsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public UpdateWorkloadRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarPriorities")
    public String[] pillarPriorities;
    public UpdateWorkloadRequestBody withPillarPriorities(String[] pillarPriorities) {
        this.pillarPriorities = pillarPriorities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReviewOwner")
    public String reviewOwner;
    public UpdateWorkloadRequestBody withReviewOwner(String reviewOwner) {
        this.reviewOwner = reviewOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadName")
    public String workloadName;
    public UpdateWorkloadRequestBody withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}