package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botAlias")
    public String botAlias;
    public PutSessionPathParams withBotAlias(String botAlias) {
        this.botAlias = botAlias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botName")
    public String botName;
    public PutSessionPathParams withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PutSessionPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}