package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetAttributesRequest {
    public DescribeFleetAttributesQueryParams queryParams;
    public DescribeFleetAttributesRequest withQueryParams(DescribeFleetAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFleetAttributesHeaders headers;
    public DescribeFleetAttributesRequest withHeaders(DescribeFleetAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetAttributesInput request;
    public DescribeFleetAttributesRequest withRequest(openapisdk.models.shared.DescribeFleetAttributesInput request) {
        this.request = request;
        return this;
    }
}