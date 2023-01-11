package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCharginglocationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostCharginglocationsRequestBodyInput request;
    public PostCharginglocationsRequest withRequest(PostCharginglocationsRequestBodyInput request) {
        this.request = request;
        return this;
    }
    public PostCharginglocationsSecurity security;
    public PostCharginglocationsRequest withSecurity(PostCharginglocationsSecurity security) {
        this.security = security;
        return this;
    }
}