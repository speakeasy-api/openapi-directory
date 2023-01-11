package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBotVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DeleteBotVersionPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public DeleteBotVersionPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
}