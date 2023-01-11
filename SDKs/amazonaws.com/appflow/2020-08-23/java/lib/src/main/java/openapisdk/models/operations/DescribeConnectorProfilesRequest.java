package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectorProfilesRequest {
    public DescribeConnectorProfilesQueryParams queryParams;
    public DescribeConnectorProfilesRequest withQueryParams(DescribeConnectorProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConnectorProfilesHeaders headers;
    public DescribeConnectorProfilesRequest withHeaders(DescribeConnectorProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeConnectorProfilesRequestBody request;
    public DescribeConnectorProfilesRequest withRequest(DescribeConnectorProfilesRequestBody request) {
        this.request = request;
        return this;
    }
}