package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botAlias")
    public String botAlias;
    public DeleteSessionPathParams withBotAlias(String botAlias) {
        this.botAlias = botAlias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botName")
    public String botName;
    public DeleteSessionPathParams withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteSessionPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}