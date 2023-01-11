package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresidentialBySize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public PresidentialBySize withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_receipt_amount")
    public Double contributionReceiptAmount;
    public PresidentialBySize withContributionReceiptAmount(Double contributionReceiptAmount) {
        this.contributionReceiptAmount = contributionReceiptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public PresidentialBySize withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer size;
    public PresidentialBySize withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_range_id")
    public Integer sizeRangeId;
    public PresidentialBySize withSizeRangeId(Integer sizeRangeId) {
        this.sizeRangeId = sizeRangeId;
        return this;
    }
}