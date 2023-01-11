package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPushSubscriptionsOnChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channel")
    public String channel;
    public GetPushSubscriptionsOnChannelsQueryParams withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetPushSubscriptionsOnChannelsQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public String deviceId;
    public GetPushSubscriptionsOnChannelsQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetPushSubscriptionsOnChannelsQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetPushSubscriptionsOnChannelsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}