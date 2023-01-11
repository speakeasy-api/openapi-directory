package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetSamplingTargetsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastRuleModification")
    public OffsetDateTime lastRuleModification;
    public GetSamplingTargetsResult withLastRuleModification(OffsetDateTime lastRuleModification) {
        this.lastRuleModification = lastRuleModification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SamplingTargetDocuments")
    public SamplingTargetDocument[] samplingTargetDocuments;
    public GetSamplingTargetsResult withSamplingTargetDocuments(SamplingTargetDocument[] samplingTargetDocuments) {
        this.samplingTargetDocuments = samplingTargetDocuments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedStatistics")
    public UnprocessedStatistics[] unprocessedStatistics;
    public GetSamplingTargetsResult withUnprocessedStatistics(UnprocessedStatistics[] unprocessedStatistics) {
        this.unprocessedStatistics = unprocessedStatistics;
        return this;
    }
}