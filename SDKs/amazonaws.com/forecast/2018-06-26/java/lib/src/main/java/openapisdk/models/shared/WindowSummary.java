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
 * WindowSummary
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
**/
public class WindowSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationType")
    public EvaluationTypeEnum evaluationType;
    public WindowSummary withEvaluationType(EvaluationTypeEnum evaluationType) {
        this.evaluationType = evaluationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ItemCount")
    public Long itemCount;
    public WindowSummary withItemCount(Long itemCount) {
        this.itemCount = itemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metrics")
    public Metrics metrics;
    public WindowSummary withMetrics(Metrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TestWindowEnd")
    public OffsetDateTime testWindowEnd;
    public WindowSummary withTestWindowEnd(OffsetDateTime testWindowEnd) {
        this.testWindowEnd = testWindowEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TestWindowStart")
    public OffsetDateTime testWindowStart;
    public WindowSummary withTestWindowStart(OffsetDateTime testWindowStart) {
        this.testWindowStart = testWindowStart;
        return this;
    }
}