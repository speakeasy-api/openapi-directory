package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DeleteBotPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}