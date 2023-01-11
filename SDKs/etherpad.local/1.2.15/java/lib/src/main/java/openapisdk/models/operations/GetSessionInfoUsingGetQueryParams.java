package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessionInfoUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sessionID")
    public String sessionID;
    public GetSessionInfoUsingGetQueryParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}