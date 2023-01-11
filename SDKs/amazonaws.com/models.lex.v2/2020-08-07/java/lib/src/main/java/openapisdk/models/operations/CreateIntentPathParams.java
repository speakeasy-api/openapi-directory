package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIntentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public CreateIntentPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public CreateIntentPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public CreateIntentPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}