package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFleetHistoryRequest {
    public PostDescribeFleetHistoryQueryParams queryParams;
    public PostDescribeFleetHistoryRequest withQueryParams(PostDescribeFleetHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFleetHistoryHeaders headers;
    public PostDescribeFleetHistoryRequest withHeaders(PostDescribeFleetHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFleetHistoryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}