package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeElasticIpsRequest {
    public DescribeElasticIpsHeaders headers;
    public DescribeElasticIpsRequest withHeaders(DescribeElasticIpsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeElasticIpsRequest request;
    public DescribeElasticIpsRequest withRequest(openapisdk.models.shared.DescribeElasticIpsRequest request) {
        this.request = request;
        return this;
    }
}