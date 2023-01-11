package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSimilar200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls_per_month")
    public String callsPerMonth;
    public GetSimilar200ApplicationJson withCallsPerMonth(String callsPerMonth) {
        this.callsPerMonth = callsPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companies")
    public openapisdk.models.shared.SimilarCompany[] companies;
    public GetSimilar200ApplicationJson withCompanies(openapisdk.models.shared.SimilarCompany[] companies) {
        this.companies = companies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_remaining")
    public String countRemaining;
    public GetSimilar200ApplicationJson withCountRemaining(String countRemaining) {
        this.countRemaining = countRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input_company")
    public openapisdk.models.shared.InputCompany inputCompany;
    public GetSimilar200ApplicationJson withInputCompany(openapisdk.models.shared.InputCompany inputCompany) {
        this.inputCompany = inputCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal_date")
    public String renewalDate;
    public GetSimilar200ApplicationJson withRenewalDate(String renewalDate) {
        this.renewalDate = renewalDate;
        return this;
    }
}