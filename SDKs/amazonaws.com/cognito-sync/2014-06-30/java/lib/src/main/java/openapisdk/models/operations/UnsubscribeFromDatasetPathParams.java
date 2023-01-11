package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeFromDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DatasetName")
    public String datasetName;
    public UnsubscribeFromDatasetPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceId")
    public String deviceId;
    public UnsubscribeFromDatasetPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public UnsubscribeFromDatasetPathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public UnsubscribeFromDatasetPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}