package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAggregationAuthorizationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregationAuthorization")
    public AggregationAuthorization aggregationAuthorization;
    public PutAggregationAuthorizationResponse withAggregationAuthorization(AggregationAuthorization aggregationAuthorization) {
        this.aggregationAuthorization = aggregationAuthorization;
        return this;
    }
}