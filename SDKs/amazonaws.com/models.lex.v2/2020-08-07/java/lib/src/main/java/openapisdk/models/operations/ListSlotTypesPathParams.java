package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSlotTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public ListSlotTypesPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public ListSlotTypesPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public ListSlotTypesPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}