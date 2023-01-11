package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DescribeBotPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}