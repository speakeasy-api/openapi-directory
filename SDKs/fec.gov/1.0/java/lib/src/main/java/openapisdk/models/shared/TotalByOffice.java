package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TotalByOffice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public TotalByOffice withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office")
    public String office;
    public TotalByOffice withOffice(String office) {
        this.office = office;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_disbursements")
    public Double totalDisbursements;
    public TotalByOffice withTotalDisbursements(Double totalDisbursements) {
        this.totalDisbursements = totalDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_receipts")
    public Double totalReceipts;
    public TotalByOffice withTotalReceipts(Double totalReceipts) {
        this.totalReceipts = totalReceipts;
        return this;
    }
}