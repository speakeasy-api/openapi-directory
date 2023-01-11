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
 * AutoScalingGroupRecommendation
 * Describes an Auto Scaling group recommendation.
**/
public class AutoScalingGroupRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AutoScalingGroupRecommendation withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroupArn")
    public String autoScalingGroupArn;
    public AutoScalingGroupRecommendation withAutoScalingGroupArn(String autoScalingGroupArn) {
        this.autoScalingGroupArn = autoScalingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroupName")
    public String autoScalingGroupName;
    public AutoScalingGroupRecommendation withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentConfiguration")
    public AutoScalingGroupConfiguration currentConfiguration;
    public AutoScalingGroupRecommendation withCurrentConfiguration(AutoScalingGroupConfiguration currentConfiguration) {
        this.currentConfiguration = currentConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finding")
    public FindingEnum finding;
    public AutoScalingGroupRecommendation withFinding(FindingEnum finding) {
        this.finding = finding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastRefreshTimestamp")
    public OffsetDateTime lastRefreshTimestamp;
    public AutoScalingGroupRecommendation withLastRefreshTimestamp(OffsetDateTime lastRefreshTimestamp) {
        this.lastRefreshTimestamp = lastRefreshTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookBackPeriodInDays")
    public Double lookBackPeriodInDays;
    public AutoScalingGroupRecommendation withLookBackPeriodInDays(Double lookBackPeriodInDays) {
        this.lookBackPeriodInDays = lookBackPeriodInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationOptions")
    public AutoScalingGroupRecommendationOption[] recommendationOptions;
    public AutoScalingGroupRecommendation withRecommendationOptions(AutoScalingGroupRecommendationOption[] recommendationOptions) {
        this.recommendationOptions = recommendationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utilizationMetrics")
    public UtilizationMetric[] utilizationMetrics;
    public AutoScalingGroupRecommendation withUtilizationMetrics(UtilizationMetric[] utilizationMetrics) {
        this.utilizationMetrics = utilizationMetrics;
        return this;
    }
}