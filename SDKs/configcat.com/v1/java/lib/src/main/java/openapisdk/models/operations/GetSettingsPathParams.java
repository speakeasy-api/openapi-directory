package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public GetSettingsPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}