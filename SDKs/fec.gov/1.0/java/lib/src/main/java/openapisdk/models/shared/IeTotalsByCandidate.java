package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IeTotalsByCandidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public IeTotalsByCandidate withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public IeTotalsByCandidate withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_oppose_indicator")
    public String supportOpposeIndicator;
    public IeTotalsByCandidate withSupportOpposeIndicator(String supportOpposeIndicator) {
        this.supportOpposeIndicator = supportOpposeIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public IeTotalsByCandidate withTotal(Double total) {
        this.total = total;
        return this;
    }
}