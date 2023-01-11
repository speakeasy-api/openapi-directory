package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommunicationCostByCandidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate")
    public String candidate;
    public CommunicationCostByCandidate withCandidate(String candidate) {
        this.candidate = candidate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public CommunicationCostByCandidate withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public CommunicationCostByCandidate withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public String committee;
    public CommunicationCostByCandidate withCommittee(String committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public CommunicationCostByCandidate withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public CommunicationCostByCandidate withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public CommunicationCostByCandidate withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public CommunicationCostByCandidate withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonProperty("support_oppose_indicator")
    public String supportOpposeIndicator;
    public CommunicationCostByCandidate withSupportOpposeIndicator(String supportOpposeIndicator) {
        this.supportOpposeIndicator = supportOpposeIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public CommunicationCostByCandidate withTotal(Double total) {
        this.total = total;
        return this;
    }
}