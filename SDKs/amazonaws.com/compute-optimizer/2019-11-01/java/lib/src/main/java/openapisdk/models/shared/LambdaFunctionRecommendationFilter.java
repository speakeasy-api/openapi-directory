package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionRecommendationFilter
 * <p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
**/
public class LambdaFunctionRecommendationFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public LambdaFunctionRecommendationFilterNameEnum name;
    public LambdaFunctionRecommendationFilter withName(LambdaFunctionRecommendationFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public LambdaFunctionRecommendationFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}