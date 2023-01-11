package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetEc2RecommendationProjectedMetricsRequest {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public GetEc2RecommendationProjectedMetricsRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("instanceArn")
    public String instanceArn;
    public GetEc2RecommendationProjectedMetricsRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("period")
    public Long period;
    public GetEc2RecommendationProjectedMetricsRequest withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationPreferences")
    public RecommendationPreferences recommendationPreferences;
    public GetEc2RecommendationProjectedMetricsRequest withRecommendationPreferences(RecommendationPreferences recommendationPreferences) {
        this.recommendationPreferences = recommendationPreferences;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public GetEc2RecommendationProjectedMetricsRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("stat")
    public MetricStatisticEnum stat;
    public GetEc2RecommendationProjectedMetricsRequest withStat(MetricStatisticEnum stat) {
        this.stat = stat;
        return this;
    }
}