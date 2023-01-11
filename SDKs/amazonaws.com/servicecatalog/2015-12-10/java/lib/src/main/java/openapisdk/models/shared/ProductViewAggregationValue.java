package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductViewAggregationValue
 * A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
**/
public class ProductViewAggregationValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApproximateCount")
    public Long approximateCount;
    public ProductViewAggregationValue withApproximateCount(Long approximateCount) {
        this.approximateCount = approximateCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public ProductViewAggregationValue withValue(String value) {
        this.value = value;
        return this;
    }
}