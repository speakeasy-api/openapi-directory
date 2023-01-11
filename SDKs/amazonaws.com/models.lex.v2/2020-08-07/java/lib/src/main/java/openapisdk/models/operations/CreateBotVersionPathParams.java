package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBotVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public CreateBotVersionPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}