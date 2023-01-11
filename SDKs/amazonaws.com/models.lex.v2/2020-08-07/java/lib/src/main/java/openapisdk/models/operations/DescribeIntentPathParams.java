package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIntentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;
    public DescribeIntentPathParams withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;
    public DescribeIntentPathParams withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intentId")
    public String intentId;
    public DescribeIntentPathParams withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public DescribeIntentPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}