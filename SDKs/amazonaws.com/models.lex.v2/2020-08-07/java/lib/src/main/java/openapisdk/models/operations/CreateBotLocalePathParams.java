package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBotLocalePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public CreateBotLocalePathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public CreateBotLocalePathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
}