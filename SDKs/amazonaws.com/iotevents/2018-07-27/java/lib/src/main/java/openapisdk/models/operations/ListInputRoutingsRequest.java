package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInputRoutingsRequest {
    public ListInputRoutingsHeaders headers;
    public ListInputRoutingsRequest withHeaders(ListInputRoutingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListInputRoutingsRequestBody request;
    public ListInputRoutingsRequest withRequest(ListInputRoutingsRequestBody request) {
        this.request = request;
        return this;
    }
}