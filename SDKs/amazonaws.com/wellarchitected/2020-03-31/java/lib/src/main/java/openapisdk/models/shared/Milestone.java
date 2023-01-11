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
 * Milestone
 * A milestone return object.
**/
public class Milestone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneName")
    public String milestoneName;
    public Milestone withMilestoneName(String milestoneName) {
        this.milestoneName = milestoneName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public Milestone withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RecordedAt")
    public OffsetDateTime recordedAt;
    public Milestone withRecordedAt(OffsetDateTime recordedAt) {
        this.recordedAt = recordedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Workload")
    public Workload workload;
    public Milestone withWorkload(Workload workload) {
        this.workload = workload;
        return this;
    }
}