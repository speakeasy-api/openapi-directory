package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHsmsRequest {
    public ListHsmsHeaders headers;
    public ListHsmsRequest withHeaders(ListHsmsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListHsmsRequest request;
    public ListHsmsRequest withRequest(openapisdk.models.shared.ListHsmsRequest request) {
        this.request = request;
        return this;
    }
}