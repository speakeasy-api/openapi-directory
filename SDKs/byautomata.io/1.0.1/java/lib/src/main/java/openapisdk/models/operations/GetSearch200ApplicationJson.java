package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSearch200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls_per_month")
    public String callsPerMonth;
    public GetSearch200ApplicationJson withCallsPerMonth(String callsPerMonth) {
        this.callsPerMonth = callsPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companies")
    public openapisdk.models.shared.SimilarCompanySearch[] companies;
    public GetSearch200ApplicationJson withCompanies(openapisdk.models.shared.SimilarCompanySearch[] companies) {
        this.companies = companies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_remaining")
    public String countRemaining;
    public GetSearch200ApplicationJson withCountRemaining(String countRemaining) {
        this.countRemaining = countRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal_date")
    public String renewalDate;
    public GetSearch200ApplicationJson withRenewalDate(String renewalDate) {
        this.renewalDate = renewalDate;
        return this;
    }
}