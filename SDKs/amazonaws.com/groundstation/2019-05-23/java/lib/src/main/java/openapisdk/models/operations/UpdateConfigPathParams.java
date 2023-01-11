package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public UpdateConfigPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configType")
    public UpdateConfigConfigTypeEnum configType;
    public UpdateConfigPathParams withConfigType(UpdateConfigConfigTypeEnum configType) {
        this.configType = configType;
        return this;
    }
}