package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBucketsAggregationRequestBodyBucketsAggregationType
 * The type of bucketed aggregation performed.
**/
public class GetBucketsAggregationRequestBodyBucketsAggregationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAggregation")
    public openapisdk.models.shared.TermsAggregation termsAggregation;
    public GetBucketsAggregationRequestBodyBucketsAggregationType withTermsAggregation(openapisdk.models.shared.TermsAggregation termsAggregation) {
        this.termsAggregation = termsAggregation;
        return this;
    }
}