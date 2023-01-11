package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresidentialByCandidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public PresidentialByCandidate withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public PresidentialByCandidate withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_party_affiliation")
    public String candidatePartyAffiliation;
    public PresidentialByCandidate withCandidatePartyAffiliation(String candidatePartyAffiliation) {
        this.candidatePartyAffiliation = candidatePartyAffiliation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_state")
    public String contributorState;
    public PresidentialByCandidate withContributorState(String contributorState) {
        this.contributorState = contributorState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public PresidentialByCandidate withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_receipts")
    public Double netReceipts;
    public PresidentialByCandidate withNetReceipts(Double netReceipts) {
        this.netReceipts = netReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rounded_net_receipts")
    public Double roundedNetReceipts;
    public PresidentialByCandidate withRoundedNetReceipts(Double roundedNetReceipts) {
        this.roundedNetReceipts = roundedNetReceipts;
        return this;
    }
}