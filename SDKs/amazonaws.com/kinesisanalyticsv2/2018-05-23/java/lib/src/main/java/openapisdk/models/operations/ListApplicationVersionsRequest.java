package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationVersionsRequest {
    public ListApplicationVersionsHeaders headers;
    public ListApplicationVersionsRequest withHeaders(ListApplicationVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApplicationVersionsRequest request;
    public ListApplicationVersionsRequest withRequest(openapisdk.models.shared.ListApplicationVersionsRequest request) {
        this.request = request;
        return this;
    }
}