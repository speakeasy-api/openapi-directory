package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresidentialByState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public PresidentialByState withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_receipt_amount")
    public Double contributionReceiptAmount;
    public PresidentialByState withContributionReceiptAmount(Double contributionReceiptAmount) {
        this.contributionReceiptAmount = contributionReceiptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_state")
    public String contributionState;
    public PresidentialByState withContributionState(String contributionState) {
        this.contributionState = contributionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public PresidentialByState withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
}