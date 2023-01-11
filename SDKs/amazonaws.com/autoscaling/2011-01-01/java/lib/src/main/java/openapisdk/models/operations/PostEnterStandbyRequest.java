package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnterStandbyRequest {
    public PostEnterStandbyQueryParams queryParams;
    public PostEnterStandbyRequest withQueryParams(PostEnterStandbyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnterStandbyHeaders headers;
    public PostEnterStandbyRequest withHeaders(PostEnterStandbyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnterStandbyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}