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
 * MilestoneSummary
 * A milestone summary return object.
**/
public class MilestoneSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneName")
    public String milestoneName;
    public MilestoneSummary withMilestoneName(String milestoneName) {
        this.milestoneName = milestoneName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public MilestoneSummary withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RecordedAt")
    public OffsetDateTime recordedAt;
    public MilestoneSummary withRecordedAt(OffsetDateTime recordedAt) {
        this.recordedAt = recordedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadSummary")
    public WorkloadSummary workloadSummary;
    public MilestoneSummary withWorkloadSummary(WorkloadSummary workloadSummary) {
        this.workloadSummary = workloadSummary;
        return this;
    }
}