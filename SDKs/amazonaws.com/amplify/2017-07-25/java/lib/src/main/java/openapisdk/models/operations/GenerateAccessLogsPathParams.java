package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateAccessLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GenerateAccessLogsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}