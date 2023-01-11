package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetLocationAttributesRequest {
    public DescribeFleetLocationAttributesQueryParams queryParams;
    public DescribeFleetLocationAttributesRequest withQueryParams(DescribeFleetLocationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFleetLocationAttributesHeaders headers;
    public DescribeFleetLocationAttributesRequest withHeaders(DescribeFleetLocationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetLocationAttributesInput request;
    public DescribeFleetLocationAttributesRequest withRequest(openapisdk.models.shared.DescribeFleetLocationAttributesInput request) {
        this.request = request;
        return this;
    }
}