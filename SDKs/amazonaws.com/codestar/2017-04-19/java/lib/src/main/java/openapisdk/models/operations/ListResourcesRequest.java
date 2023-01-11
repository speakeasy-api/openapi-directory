package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourcesRequest {
    public ListResourcesHeaders headers;
    public ListResourcesRequest withHeaders(ListResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourcesRequest request;
    public ListResourcesRequest withRequest(openapisdk.models.shared.ListResourcesRequest request) {
        this.request = request;
        return this;
    }
}