package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregationConfig
 *  The aggregation settings that you can use to customize the output format of your flow data. 
**/
public class AggregationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationType")
    public AggregationTypeEnum aggregationType;
    public AggregationConfig withAggregationType(AggregationTypeEnum aggregationType) {
        this.aggregationType = aggregationType;
        return this;
    }
}