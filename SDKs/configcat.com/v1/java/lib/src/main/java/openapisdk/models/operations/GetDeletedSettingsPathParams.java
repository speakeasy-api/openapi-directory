package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeletedSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public GetDeletedSettingsPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}