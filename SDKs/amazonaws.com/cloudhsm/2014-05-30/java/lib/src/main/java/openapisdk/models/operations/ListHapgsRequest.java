package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHapgsRequest {
    public ListHapgsHeaders headers;
    public ListHapgsRequest withHeaders(ListHapgsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListHapgsRequest request;
    public ListHapgsRequest withRequest(openapisdk.models.shared.ListHapgsRequest request) {
        this.request = request;
        return this;
    }
}