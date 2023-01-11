package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public GetConfigPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}