package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessionInfoUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sessionID")
    public String sessionID;
    public GetSessionInfoUsingPostQueryParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}