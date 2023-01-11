package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemRequest {
    public UpdateItemHeaders headers;
    public UpdateItemRequest withHeaders(UpdateItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateItemInput request;
    public UpdateItemRequest withRequest(openapisdk.models.shared.UpdateItemInput request) {
        this.request = request;
        return this;
    }
}