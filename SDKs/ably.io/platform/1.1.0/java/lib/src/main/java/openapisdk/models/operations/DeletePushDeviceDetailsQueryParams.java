package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePushDeviceDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channel")
    public String channel;
    public DeletePushDeviceDetailsQueryParams withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public DeletePushDeviceDetailsQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public String deviceId;
    public DeletePushDeviceDetailsQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public DeletePushDeviceDetailsQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}