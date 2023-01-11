package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdHistoryCyclePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdHistoryCyclePathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cycle")
    public Integer cycle;
    public GetCommitteeCommitteeIdHistoryCyclePathParams withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
}