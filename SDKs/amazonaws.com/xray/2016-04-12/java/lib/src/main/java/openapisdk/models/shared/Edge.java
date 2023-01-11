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
 * Edge
 * Information about a connection between two services.
**/
public class Edge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Aliases")
    public Alias[] aliases;
    public Edge withAliases(Alias[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public Edge withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceId")
    public Long referenceId;
    public Edge withReferenceId(Long referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseTimeHistogram")
    public HistogramEntry[] responseTimeHistogram;
    public Edge withResponseTimeHistogram(HistogramEntry[] responseTimeHistogram) {
        this.responseTimeHistogram = responseTimeHistogram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public Edge withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SummaryStatistics")
    public EdgeStatistics summaryStatistics;
    public Edge withSummaryStatistics(EdgeStatistics summaryStatistics) {
        this.summaryStatistics = summaryStatistics;
        return this;
    }
}