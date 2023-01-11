package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFleetMetricRequestBodyAggregationType
 * The type of aggregation queries.
**/
public class UpdateFleetMetricRequestBodyAggregationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.AggregationTypeNameEnum name;
    public UpdateFleetMetricRequestBodyAggregationType withName(openapisdk.models.shared.AggregationTypeNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public UpdateFleetMetricRequestBodyAggregationType withValues(String[] values) {
        this.values = values;
        return this;
    }
}