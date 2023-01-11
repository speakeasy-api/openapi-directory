package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePlatformVersionRequest {
    public PostDescribePlatformVersionQueryParams queryParams;
    public PostDescribePlatformVersionRequest withQueryParams(PostDescribePlatformVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePlatformVersionHeaders headers;
    public PostDescribePlatformVersionRequest withHeaders(PostDescribePlatformVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePlatformVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}