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
 * WorkloadSummary
 * A workload summary return object.
**/
public class WorkloadSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImprovementStatus")
    public WorkloadImprovementStatusEnum improvementStatus;
    public WorkloadSummary withImprovementStatus(WorkloadImprovementStatusEnum improvementStatus) {
        this.improvementStatus = improvementStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lenses")
    public String[] lenses;
    public WorkloadSummary withLenses(String[] lenses) {
        this.lenses = lenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public WorkloadSummary withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskCounts")
    public java.util.Map<String, Long> riskCounts;
    public WorkloadSummary withRiskCounts(java.util.Map<String, Long> riskCounts) {
        this.riskCounts = riskCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public WorkloadSummary withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadArn")
    public String workloadArn;
    public WorkloadSummary withWorkloadArn(String workloadArn) {
        this.workloadArn = workloadArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public WorkloadSummary withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadName")
    public String workloadName;
    public WorkloadSummary withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}