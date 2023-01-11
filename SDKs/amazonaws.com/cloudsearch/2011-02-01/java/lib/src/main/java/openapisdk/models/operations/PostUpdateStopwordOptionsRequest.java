package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateStopwordOptionsRequest {
    public PostUpdateStopwordOptionsQueryParams queryParams;
    public PostUpdateStopwordOptionsRequest withQueryParams(PostUpdateStopwordOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateStopwordOptionsHeaders headers;
    public PostUpdateStopwordOptionsRequest withHeaders(PostUpdateStopwordOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateStopwordOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}