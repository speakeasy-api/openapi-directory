package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClustersRequest {
    public DescribeClustersQueryParams queryParams;
    public DescribeClustersRequest withQueryParams(DescribeClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
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