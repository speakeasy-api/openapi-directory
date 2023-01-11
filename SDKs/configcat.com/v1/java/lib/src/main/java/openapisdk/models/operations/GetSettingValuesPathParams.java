package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public GetSettingValuesPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public GetSettingValuesPathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}