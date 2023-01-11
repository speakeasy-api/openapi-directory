package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBotAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botAliasId")
    public String botAliasId;
    public DeleteBotAliasPathParams withBotAliasId(String botAliasId) {
        this.botAliasId = botAliasId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DeleteBotAliasPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}