package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdCandidatesHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdCandidatesHistoryPathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
}