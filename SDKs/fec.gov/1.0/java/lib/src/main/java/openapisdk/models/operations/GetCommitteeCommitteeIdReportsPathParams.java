package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdReportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public GetCommitteeCommitteeIdReportsPathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
}