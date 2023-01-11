package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostComposeEnvironmentsRequest {
    public PostComposeEnvironmentsQueryParams queryParams;
    public PostComposeEnvironmentsRequest withQueryParams(PostComposeEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostComposeEnvironmentsHeaders headers;
    public PostComposeEnvironmentsRequest withHeaders(PostComposeEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostComposeEnvironmentsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}