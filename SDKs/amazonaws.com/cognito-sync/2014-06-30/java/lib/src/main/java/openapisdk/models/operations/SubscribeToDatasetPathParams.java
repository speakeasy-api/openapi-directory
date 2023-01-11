package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeToDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DatasetName")
    public String datasetName;
    public SubscribeToDatasetPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceId")
    public String deviceId;
    public SubscribeToDatasetPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public SubscribeToDatasetPathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public SubscribeToDatasetPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}