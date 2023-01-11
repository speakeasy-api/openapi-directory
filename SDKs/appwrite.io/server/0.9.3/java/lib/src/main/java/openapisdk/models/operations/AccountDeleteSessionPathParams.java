package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountDeleteSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public AccountDeleteSessionPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}