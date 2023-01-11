package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ElectionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ElectionSummary withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursements")
    public Double disbursements;
    public ElectionSummary withDisbursements(Double disbursements) {
        this.disbursements = disbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independent_expenditures")
    public Double independentExpenditures;
    public ElectionSummary withIndependentExpenditures(Double independentExpenditures) {
        this.independentExpenditures = independentExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipts")
    public Double receipts;
    public ElectionSummary withReceipts(Double receipts) {
        this.receipts = receipts;
        return this;
    }
}