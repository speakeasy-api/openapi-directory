package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRelatedItemsRequest {
    public UpdateRelatedItemsHeaders headers;
    public UpdateRelatedItemsRequest withHeaders(UpdateRelatedItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRelatedItemsRequestBody request;
    public UpdateRelatedItemsRequest withRequest(UpdateRelatedItemsRequestBody request) {
        this.request = request;
        return this;
    }
}