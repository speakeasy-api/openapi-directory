package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSuggestersRequest {
    public PostDescribeSuggestersQueryParams queryParams;
    public PostDescribeSuggestersRequest withQueryParams(PostDescribeSuggestersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSuggestersHeaders headers;
    public PostDescribeSuggestersRequest withHeaders(PostDescribeSuggestersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSuggestersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}