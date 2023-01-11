package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFleetsRequest {
    public PostDescribeFleetsQueryParams queryParams;
    public PostDescribeFleetsRequest withQueryParams(PostDescribeFleetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFleetsHeaders headers;
    public PostDescribeFleetsRequest withHeaders(PostDescribeFleetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFleetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}