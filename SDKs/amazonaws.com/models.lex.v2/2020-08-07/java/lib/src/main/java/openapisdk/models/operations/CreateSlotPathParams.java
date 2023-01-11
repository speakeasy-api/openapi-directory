package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSlotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public CreateSlotPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public CreateSlotPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intentId")
    public String intentId;
    public CreateSlotPathParams withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public CreateSlotPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}