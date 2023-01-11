package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSessionUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sessionID")
    public String sessionID;
    public DeleteSessionUsingGetQueryParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}