package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetTokenPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public GetTokenPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}