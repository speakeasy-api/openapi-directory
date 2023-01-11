package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountGetSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public AccountGetSessionPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}