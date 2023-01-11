package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFleetMetricRequestBodyAggregationType
 * The type of aggregation queries.
**/
public class CreateFleetMetricRequestBodyAggregationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.AggregationTypeNameEnum name;
    public CreateFleetMetricRequestBodyAggregationType withName(openapisdk.models.shared.AggregationTypeNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public CreateFleetMetricRequestBodyAggregationType withValues(String[] values) {
        this.values = values;
        return this;
    }
}