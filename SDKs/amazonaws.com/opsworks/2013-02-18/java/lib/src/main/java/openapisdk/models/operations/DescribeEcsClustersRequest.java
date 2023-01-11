package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEcsClustersRequest {
    public DescribeEcsClustersQueryParams queryParams;
    public DescribeEcsClustersRequest withQueryParams(DescribeEcsClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEcsClustersHeaders headers;
    public DescribeEcsClustersRequest withHeaders(DescribeEcsClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEcsClustersRequest request;
    public DescribeEcsClustersRequest withRequest(openapisdk.models.shared.DescribeEcsClustersRequest request) {
        this.request = request;
        return this;
    }
}