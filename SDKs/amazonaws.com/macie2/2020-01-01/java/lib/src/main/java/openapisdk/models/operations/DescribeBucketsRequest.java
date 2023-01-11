package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBucketsRequest {
    public DescribeBucketsQueryParams queryParams;
    public DescribeBucketsRequest withQueryParams(DescribeBucketsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBucketsHeaders headers;
    public DescribeBucketsRequest withHeaders(DescribeBucketsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeBucketsRequestBody request;
    public DescribeBucketsRequest withRequest(DescribeBucketsRequestBody request) {
        this.request = request;
        return this;
    }
}