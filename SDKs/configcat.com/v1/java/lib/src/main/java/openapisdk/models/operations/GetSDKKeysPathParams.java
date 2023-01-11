package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSDKKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public GetSDKKeysPathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public GetSDKKeysPathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}