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
 * Workload
 * A workload return object.
**/
public class Workload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public Workload withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchitecturalDesign")
    public String architecturalDesign;
    public Workload withArchitecturalDesign(String architecturalDesign) {
        this.architecturalDesign = architecturalDesign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegions")
    public String[] awsRegions;
    public Workload withAwsRegions(String[] awsRegions) {
        this.awsRegions = awsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Workload withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public WorkloadEnvironmentEnum environment;
    public Workload withEnvironment(WorkloadEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImprovementStatus")
    public WorkloadImprovementStatusEnum improvementStatus;
    public Workload withImprovementStatus(WorkloadImprovementStatusEnum improvementStatus) {
        this.improvementStatus = improvementStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Industry")
    public String industry;
    public Workload withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndustryType")
    public String industryType;
    public Workload withIndustryType(String industryType) {
        this.industryType = industryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsReviewOwnerUpdateAcknowledged")
    public Boolean isReviewOwnerUpdateAcknowledged;
    public Workload withIsReviewOwnerUpdateAcknowledged(Boolean isReviewOwnerUpdateAcknowledged) {
        this.isReviewOwnerUpdateAcknowledged = isReviewOwnerUpdateAcknowledged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lenses")
    public String[] lenses;
    public Workload withLenses(String[] lenses) {
        this.lenses = lenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonAwsRegions")
    public String[] nonAwsRegions;
    public Workload withNonAwsRegions(String[] nonAwsRegions) {
        this.nonAwsRegions = nonAwsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public Workload withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public Workload withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarPriorities")
    public String[] pillarPriorities;
    public Workload withPillarPriorities(String[] pillarPriorities) {
        this.pillarPriorities = pillarPriorities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReviewOwner")
    public String reviewOwner;
    public Workload withReviewOwner(String reviewOwner) {
        this.reviewOwner = reviewOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReviewRestrictionDate")
    public OffsetDateTime reviewRestrictionDate;
    public Workload withReviewRestrictionDate(OffsetDateTime reviewRestrictionDate) {
        this.reviewRestrictionDate = reviewRestrictionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskCounts")
    public java.util.Map<String, Long> riskCounts;
    public Workload withRiskCounts(java.util.Map<String, Long> riskCounts) {
        this.riskCounts = riskCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareInvitationId")
    public String shareInvitationId;
    public Workload withShareInvitationId(String shareInvitationId) {
        this.shareInvitationId = shareInvitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public Workload withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public Workload withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadArn")
    public String workloadArn;
    public Workload withWorkloadArn(String workloadArn) {
        this.workloadArn = workloadArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public Workload withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadName")
    public String workloadName;
    public Workload withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}