package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregationType
 * The type of aggregation queries.
**/
public class AggregationType {
    @JsonProperty("name")
    public AggregationTypeNameEnum name;
    public AggregationType withName(AggregationTypeNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public AggregationType withValues(String[] values) {
        this.values = values;
        return this;
    }
}