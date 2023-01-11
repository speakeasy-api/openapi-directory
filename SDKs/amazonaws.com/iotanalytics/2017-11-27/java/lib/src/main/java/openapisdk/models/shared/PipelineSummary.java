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
 * PipelineSummary
 * A summary of information about a pipeline.
**/
public class PipelineSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public PipelineSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public PipelineSummary withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineName")
    public String pipelineName;
    public PipelineSummary withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reprocessingSummaries")
    public ReprocessingSummary[] reprocessingSummaries;
    public PipelineSummary withReprocessingSummaries(ReprocessingSummary[] reprocessingSummaries) {
        this.reprocessingSummaries = reprocessingSummaries;
        return this;
    }
}