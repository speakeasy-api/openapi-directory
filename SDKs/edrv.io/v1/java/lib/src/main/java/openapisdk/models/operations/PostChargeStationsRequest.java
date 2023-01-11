package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChargeStationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Schema1 request;
    public PostChargeStationsRequest withRequest(openapisdk.models.shared.Schema1 request) {
        this.request = request;
        return this;
    }
}