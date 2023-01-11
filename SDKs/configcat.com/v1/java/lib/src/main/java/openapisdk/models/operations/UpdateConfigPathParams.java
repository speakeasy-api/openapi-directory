package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public UpdateConfigPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}