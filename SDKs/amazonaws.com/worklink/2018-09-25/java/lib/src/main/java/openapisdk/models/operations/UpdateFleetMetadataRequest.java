package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetMetadataRequest {
    public UpdateFleetMetadataHeaders headers;
    public UpdateFleetMetadataRequest withHeaders(UpdateFleetMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFleetMetadataRequestBody request;
    public UpdateFleetMetadataRequest withRequest(UpdateFleetMetadataRequestBody request) {
        this.request = request;
        return this;
    }
}