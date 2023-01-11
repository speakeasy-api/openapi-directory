package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExitStandbyRequest {
    public PostExitStandbyQueryParams queryParams;
    public PostExitStandbyRequest withQueryParams(PostExitStandbyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostExitStandbyHeaders headers;
    public PostExitStandbyRequest withHeaders(PostExitStandbyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostExitStandbyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}