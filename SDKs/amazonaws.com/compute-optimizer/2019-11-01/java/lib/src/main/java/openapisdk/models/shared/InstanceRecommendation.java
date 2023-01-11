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
 * InstanceRecommendation
 * Describes an Amazon EC2 instance recommendation.
**/
public class InstanceRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public InstanceRecommendation withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentInstanceType")
    public String currentInstanceType;
    public InstanceRecommendation withCurrentInstanceType(String currentInstanceType) {
        this.currentInstanceType = currentInstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finding")
    public FindingEnum finding;
    public InstanceRecommendation withFinding(FindingEnum finding) {
        this.finding = finding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingReasonCodes")
    public InstanceRecommendationFindingReasonCodeEnum[] findingReasonCodes;
    public InstanceRecommendation withFindingReasonCodes(InstanceRecommendationFindingReasonCodeEnum[] findingReasonCodes) {
        this.findingReasonCodes = findingReasonCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceArn")
    public String instanceArn;
    public InstanceRecommendation withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceName")
    public String instanceName;
    public InstanceRecommendation withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastRefreshTimestamp")
    public OffsetDateTime lastRefreshTimestamp;
    public InstanceRecommendation withLastRefreshTimestamp(OffsetDateTime lastRefreshTimestamp) {
        this.lastRefreshTimestamp = lastRefreshTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookBackPeriodInDays")
    public Double lookBackPeriodInDays;
    public InstanceRecommendation withLookBackPeriodInDays(Double lookBackPeriodInDays) {
        this.lookBackPeriodInDays = lookBackPeriodInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationOptions")
    public InstanceRecommendationOption[] recommendationOptions;
    public InstanceRecommendation withRecommendationOptions(InstanceRecommendationOption[] recommendationOptions) {
        this.recommendationOptions = recommendationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationSources")
    public RecommendationSource[] recommendationSources;
    public InstanceRecommendation withRecommendationSources(RecommendationSource[] recommendationSources) {
        this.recommendationSources = recommendationSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utilizationMetrics")
    public UtilizationMetric[] utilizationMetrics;
    public InstanceRecommendation withUtilizationMetrics(UtilizationMetric[] utilizationMetrics) {
        this.utilizationMetrics = utilizationMetrics;
        return this;
    }
}