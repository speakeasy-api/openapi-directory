package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBotAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public CreateBotAliasPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}