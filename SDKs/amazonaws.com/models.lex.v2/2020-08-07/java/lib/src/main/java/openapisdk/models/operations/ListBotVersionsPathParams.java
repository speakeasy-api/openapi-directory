package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public ListBotVersionsPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}