package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSessionUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sessionID")
    public String sessionID;
    public DeleteSessionUsingPostQueryParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}