package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeRecommendationOption
 * Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
**/
public class VolumeRecommendationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public VolumeConfiguration configuration;
    public VolumeRecommendationOption withConfiguration(VolumeConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceRisk")
    public Double performanceRisk;
    public VolumeRecommendationOption withPerformanceRisk(Double performanceRisk) {
        this.performanceRisk = performanceRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public VolumeRecommendationOption withRank(Long rank) {
        this.rank = rank;
        return this;
    }
}