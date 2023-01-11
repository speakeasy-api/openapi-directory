package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdPathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
}