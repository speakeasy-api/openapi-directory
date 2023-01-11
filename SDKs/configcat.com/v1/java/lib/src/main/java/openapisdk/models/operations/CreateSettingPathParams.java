package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public CreateSettingPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}