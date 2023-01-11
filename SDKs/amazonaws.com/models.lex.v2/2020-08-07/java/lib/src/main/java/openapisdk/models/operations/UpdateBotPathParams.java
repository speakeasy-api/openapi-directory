package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public UpdateBotPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}