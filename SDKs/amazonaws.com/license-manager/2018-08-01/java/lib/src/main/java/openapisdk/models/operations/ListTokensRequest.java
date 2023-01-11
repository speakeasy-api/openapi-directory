package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTokensRequest {
    public ListTokensHeaders headers;
    public ListTokensRequest withHeaders(ListTokensHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTokensRequest request;
    public ListTokensRequest withRequest(openapisdk.models.shared.ListTokensRequest request) {
        this.request = request;
        return this;
    }
}