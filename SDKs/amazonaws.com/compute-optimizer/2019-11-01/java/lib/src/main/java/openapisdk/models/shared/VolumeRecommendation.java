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
 * VolumeRecommendation
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
**/
public class VolumeRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public VolumeRecommendation withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentConfiguration")
    public VolumeConfiguration currentConfiguration;
    public VolumeRecommendation withCurrentConfiguration(VolumeConfiguration currentConfiguration) {
        this.currentConfiguration = currentConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finding")
    public EbsFindingEnum finding;
    public VolumeRecommendation withFinding(EbsFindingEnum finding) {
        this.finding = finding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastRefreshTimestamp")
    public OffsetDateTime lastRefreshTimestamp;
    public VolumeRecommendation withLastRefreshTimestamp(OffsetDateTime lastRefreshTimestamp) {
        this.lastRefreshTimestamp = lastRefreshTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookBackPeriodInDays")
    public Double lookBackPeriodInDays;
    public VolumeRecommendation withLookBackPeriodInDays(Double lookBackPeriodInDays) {
        this.lookBackPeriodInDays = lookBackPeriodInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utilizationMetrics")
    public EbsUtilizationMetric[] utilizationMetrics;
    public VolumeRecommendation withUtilizationMetrics(EbsUtilizationMetric[] utilizationMetrics) {
        this.utilizationMetrics = utilizationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeArn")
    public String volumeArn;
    public VolumeRecommendation withVolumeArn(String volumeArn) {
        this.volumeArn = volumeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeRecommendationOptions")
    public VolumeRecommendationOption[] volumeRecommendationOptions;
    public VolumeRecommendation withVolumeRecommendationOptions(VolumeRecommendationOption[] volumeRecommendationOptions) {
        this.volumeRecommendationOptions = volumeRecommendationOptions;
        return this;
    }
}