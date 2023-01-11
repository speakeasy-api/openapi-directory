package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricDimension
 * The dimension of a metric.
**/
public class MetricDimension {
    @JsonProperty("dimensionName")
    public String dimensionName;
    public MetricDimension withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public DimensionValueOperatorEnum operator;
    public MetricDimension withOperator(DimensionValueOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}