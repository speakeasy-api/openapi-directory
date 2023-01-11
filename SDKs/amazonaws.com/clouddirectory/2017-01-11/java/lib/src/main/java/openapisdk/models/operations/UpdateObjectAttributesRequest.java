package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateObjectAttributesRequest {
    public UpdateObjectAttributesHeaders headers;
    public UpdateObjectAttributesRequest withHeaders(UpdateObjectAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateObjectAttributesRequestBody request;
    public UpdateObjectAttributesRequest withRequest(UpdateObjectAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}