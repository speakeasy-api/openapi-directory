package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegisteredPushDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetRegisteredPushDevicesQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public String deviceId;
    public GetRegisteredPushDevicesQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetRegisteredPushDevicesQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetRegisteredPushDevicesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}