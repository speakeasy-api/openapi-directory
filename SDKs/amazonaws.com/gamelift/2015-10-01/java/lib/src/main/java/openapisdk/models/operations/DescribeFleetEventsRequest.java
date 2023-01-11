package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetEventsRequest {
    public DescribeFleetEventsQueryParams queryParams;
    public DescribeFleetEventsRequest withQueryParams(DescribeFleetEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFleetEventsHeaders headers;
    public DescribeFleetEventsRequest withHeaders(DescribeFleetEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetEventsInput request;
    public DescribeFleetEventsRequest withRequest(openapisdk.models.shared.DescribeFleetEventsInput request) {
        this.request = request;
        return this;
    }
}