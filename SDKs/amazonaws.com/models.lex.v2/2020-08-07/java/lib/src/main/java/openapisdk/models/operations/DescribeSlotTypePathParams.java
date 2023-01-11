package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSlotTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DescribeSlotTypePathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public DescribeSlotTypePathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public DescribeSlotTypePathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slotTypeId")
    public String slotTypeId;
    public DescribeSlotTypePathParams withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
}