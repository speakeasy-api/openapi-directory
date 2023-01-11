package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContentproSearch200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls_per_month")
    public String callsPerMonth;
    public GetContentproSearch200ApplicationJson withCallsPerMonth(String callsPerMonth) {
        this.callsPerMonth = callsPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_remaining")
    public String countRemaining;
    public GetContentproSearch200ApplicationJson withCountRemaining(String countRemaining) {
        this.countRemaining = countRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetContentproSearch200ApplicationJsonData[] data;
    public GetContentproSearch200ApplicationJson withData(GetContentproSearch200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal_date")
    public String renewalDate;
    public GetContentproSearch200ApplicationJson withRenewalDate(String renewalDate) {
        this.renewalDate = renewalDate;
        return this;
    }
}