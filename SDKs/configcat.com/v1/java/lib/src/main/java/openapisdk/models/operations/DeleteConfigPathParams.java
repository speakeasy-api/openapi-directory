package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public DeleteConfigPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}