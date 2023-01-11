package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdHistoryCyclePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdHistoryCyclePathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cycle")
    public Integer cycle;
    public GetCandidateCandidateIdHistoryCyclePathParams withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
}