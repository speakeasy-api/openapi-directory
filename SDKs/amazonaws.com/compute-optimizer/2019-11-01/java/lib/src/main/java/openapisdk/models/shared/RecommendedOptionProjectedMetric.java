package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendedOptionProjectedMetric
 * <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
**/
public class RecommendedOptionProjectedMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectedMetrics")
    public ProjectedMetric[] projectedMetrics;
    public RecommendedOptionProjectedMetric withProjectedMetrics(ProjectedMetric[] projectedMetrics) {
        this.projectedMetrics = projectedMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public RecommendedOptionProjectedMetric withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedInstanceType")
    public String recommendedInstanceType;
    public RecommendedOptionProjectedMetric withRecommendedInstanceType(String recommendedInstanceType) {
        this.recommendedInstanceType = recommendedInstanceType;
        return this;
    }
}