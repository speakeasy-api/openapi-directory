package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeElasticGpusRequest {
    public PostDescribeElasticGpusQueryParams queryParams;
    public PostDescribeElasticGpusRequest withQueryParams(PostDescribeElasticGpusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeElasticGpusHeaders headers;
    public PostDescribeElasticGpusRequest withHeaders(PostDescribeElasticGpusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeElasticGpusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}