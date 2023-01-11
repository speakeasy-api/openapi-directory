package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdCommitteesHistoryCyclePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdCommitteesHistoryCyclePathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cycle")
    public Integer cycle;
    public GetCandidateCandidateIdCommitteesHistoryCyclePathParams withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
}