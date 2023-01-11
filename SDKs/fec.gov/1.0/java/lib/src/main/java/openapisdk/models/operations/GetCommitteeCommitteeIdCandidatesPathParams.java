package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdCandidatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdCandidatesPathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
}