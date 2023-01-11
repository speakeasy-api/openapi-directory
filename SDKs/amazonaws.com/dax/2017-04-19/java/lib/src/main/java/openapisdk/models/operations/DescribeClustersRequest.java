package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClustersRequest {
    public DescribeClustersHeaders headers;
    public DescribeClustersRequest withHeaders(DescribeClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeClustersRequest request;
    public DescribeClustersRequest withRequest(openapisdk.models.shared.DescribeClustersRequest request) {
        this.request = request;
        return this;
    }
}