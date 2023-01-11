package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdHistoryPathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
}