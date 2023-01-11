package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSlotTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DeleteSlotTypePathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public DeleteSlotTypePathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public DeleteSlotTypePathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slotTypeId")
    public String slotTypeId;
    public DeleteSlotTypePathParams withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
}