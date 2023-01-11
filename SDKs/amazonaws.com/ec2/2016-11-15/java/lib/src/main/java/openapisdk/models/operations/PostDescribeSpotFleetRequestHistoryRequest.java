package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotFleetRequestHistoryRequest {
    public PostDescribeSpotFleetRequestHistoryQueryParams queryParams;
    public PostDescribeSpotFleetRequestHistoryRequest withQueryParams(PostDescribeSpotFleetRequestHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSpotFleetRequestHistoryHeaders headers;
    public PostDescribeSpotFleetRequestHistoryRequest withHeaders(PostDescribeSpotFleetRequestHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSpotFleetRequestHistoryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}