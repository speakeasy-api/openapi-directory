package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cycle")
    public Integer cycle;
    public GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
}