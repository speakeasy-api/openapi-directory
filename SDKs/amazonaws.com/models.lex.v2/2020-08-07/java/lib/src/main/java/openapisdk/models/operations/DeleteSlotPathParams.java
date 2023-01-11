package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSlotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DeleteSlotPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public DeleteSlotPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intentId")
    public String intentId;
    public DeleteSlotPathParams withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public DeleteSlotPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slotId")
    public String slotId;
    public DeleteSlotPathParams withSlotId(String slotId) {
        this.slotId = slotId;
        return this;
    }
}