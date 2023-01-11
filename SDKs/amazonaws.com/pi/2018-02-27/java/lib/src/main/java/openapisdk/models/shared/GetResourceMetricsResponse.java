package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetResourceMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AlignedEndTime")
    public OffsetDateTime alignedEndTime;
    public GetResourceMetricsResponse withAlignedEndTime(OffsetDateTime alignedEndTime) {
        this.alignedEndTime = alignedEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AlignedStartTime")
    public OffsetDateTime alignedStartTime;
    public GetResourceMetricsResponse withAlignedStartTime(OffsetDateTime alignedStartTime) {
        this.alignedStartTime = alignedStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identifier")
    public String identifier;
    public GetResourceMetricsResponse withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricList")
    public MetricKeyDataPoints[] metricList;
    public GetResourceMetricsResponse withMetricList(MetricKeyDataPoints[] metricList) {
        this.metricList = metricList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetResourceMetricsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}