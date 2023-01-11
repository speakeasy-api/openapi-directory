package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotLocalesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public ListBotLocalesPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public ListBotLocalesPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
}