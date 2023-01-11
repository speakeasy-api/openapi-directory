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
 * BuildBatchPhase
 * Contains information about a stage for a batch build.
**/
public class BuildBatchPhase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts")
    public PhaseContext[] contexts;
    public BuildBatchPhase withContexts(PhaseContext[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInSeconds")
    public Long durationInSeconds;
    public BuildBatchPhase withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public BuildBatchPhase withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phaseStatus")
    public StatusTypeEnum phaseStatus;
    public BuildBatchPhase withPhaseStatus(StatusTypeEnum phaseStatus) {
        this.phaseStatus = phaseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phaseType")
    public BuildBatchPhaseTypeEnum phaseType;
    public BuildBatchPhase withPhaseType(BuildBatchPhaseTypeEnum phaseType) {
        this.phaseType = phaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public BuildBatchPhase withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}