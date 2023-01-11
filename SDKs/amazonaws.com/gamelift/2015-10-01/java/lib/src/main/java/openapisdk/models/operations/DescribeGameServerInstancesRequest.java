package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameServerInstancesRequest {
    public DescribeGameServerInstancesQueryParams queryParams;
    public DescribeGameServerInstancesRequest withQueryParams(DescribeGameServerInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeGameServerInstancesHeaders headers;
    public DescribeGameServerInstancesRequest withHeaders(DescribeGameServerInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameServerInstancesInput request;
    public DescribeGameServerInstancesRequest withRequest(openapisdk.models.shared.DescribeGameServerInstancesInput request) {
        this.request = request;
        return this;
    }
}