package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBotAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botAliasId")
    public String botAliasId;
    public DescribeBotAliasPathParams withBotAliasId(String botAliasId) {
        this.botAliasId = botAliasId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DescribeBotAliasPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}