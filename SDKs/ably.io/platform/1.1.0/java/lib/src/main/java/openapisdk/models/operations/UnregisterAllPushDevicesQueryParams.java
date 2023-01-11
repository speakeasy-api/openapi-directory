package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterAllPushDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public UnregisterAllPushDevicesQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public String deviceId;
    public UnregisterAllPushDevicesQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public UnregisterAllPushDevicesQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}