package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public DeleteConfigPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configType")
    public DeleteConfigConfigTypeEnum configType;
    public DeleteConfigPathParams withConfigType(DeleteConfigConfigTypeEnum configType) {
        this.configType = configType;
        return this;
    }
}