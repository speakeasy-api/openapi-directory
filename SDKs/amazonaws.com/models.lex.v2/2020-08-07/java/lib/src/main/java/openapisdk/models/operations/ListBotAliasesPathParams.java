package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotAliasesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public ListBotAliasesPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}