package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeBundleTasksRequest {
    public PostDescribeBundleTasksQueryParams queryParams;
    public PostDescribeBundleTasksRequest withQueryParams(PostDescribeBundleTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeBundleTasksHeaders headers;
    public PostDescribeBundleTasksRequest withHeaders(PostDescribeBundleTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeBundleTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}