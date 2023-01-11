package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBotAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botAliasId")
    public String botAliasId;
    public UpdateBotAliasPathParams withBotAliasId(String botAliasId) {
        this.botAliasId = botAliasId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public UpdateBotAliasPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}