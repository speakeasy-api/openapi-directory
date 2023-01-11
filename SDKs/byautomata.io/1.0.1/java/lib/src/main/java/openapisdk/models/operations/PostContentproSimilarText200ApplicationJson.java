package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostContentproSimilarText200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls_per_month")
    public String callsPerMonth;
    public PostContentproSimilarText200ApplicationJson withCallsPerMonth(String callsPerMonth) {
        this.callsPerMonth = callsPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_remaining")
    public String countRemaining;
    public PostContentproSimilarText200ApplicationJson withCountRemaining(String countRemaining) {
        this.countRemaining = countRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public PostContentproSimilarText200ApplicationJsonData[] data;
    public PostContentproSimilarText200ApplicationJson withData(PostContentproSimilarText200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal_date")
    public String renewalDate;
    public PostContentproSimilarText200ApplicationJson withRenewalDate(String renewalDate) {
        this.renewalDate = renewalDate;
        return this;
    }
}