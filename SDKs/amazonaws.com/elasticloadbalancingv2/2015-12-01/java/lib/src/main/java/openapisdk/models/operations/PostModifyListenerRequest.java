package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyListenerRequest {
    public PostModifyListenerQueryParams queryParams;
    public PostModifyListenerRequest withQueryParams(PostModifyListenerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyListenerHeaders headers;
    public PostModifyListenerRequest withHeaders(PostModifyListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyListenerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}