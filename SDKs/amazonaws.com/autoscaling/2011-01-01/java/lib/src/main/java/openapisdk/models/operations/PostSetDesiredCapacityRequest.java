package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetDesiredCapacityRequest {
    public PostSetDesiredCapacityQueryParams queryParams;
    public PostSetDesiredCapacityRequest withQueryParams(PostSetDesiredCapacityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetDesiredCapacityHeaders headers;
    public PostSetDesiredCapacityRequest withHeaders(PostSetDesiredCapacityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetDesiredCapacityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}