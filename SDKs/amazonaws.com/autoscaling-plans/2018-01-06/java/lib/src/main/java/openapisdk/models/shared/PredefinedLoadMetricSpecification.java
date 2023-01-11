package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PredefinedLoadMetricSpecification
 * <p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>
**/
public class PredefinedLoadMetricSpecification {
    @JsonProperty("PredefinedLoadMetricType")
    public LoadMetricTypeEnum predefinedLoadMetricType;
    public PredefinedLoadMetricSpecification withPredefinedLoadMetricType(LoadMetricTypeEnum predefinedLoadMetricType) {
        this.predefinedLoadMetricType = predefinedLoadMetricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceLabel")
    public String resourceLabel;
    public PredefinedLoadMetricSpecification withResourceLabel(String resourceLabel) {
        this.resourceLabel = resourceLabel;
        return this;
    }
}