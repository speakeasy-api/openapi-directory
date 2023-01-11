package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MetricDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonOperator")
    public String comparisonOperator;
    public MetricDimension withComparisonOperator(String comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public MetricDimension withValue(Double value) {
        this.value = value;
        return this;
    }
}