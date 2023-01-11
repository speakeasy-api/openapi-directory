package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceArn")
    public String deviceArn;
    public GetDevicePathParams withDeviceArn(String deviceArn) {
        this.deviceArn = deviceArn;
        return this;
    }
}