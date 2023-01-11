package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentManagedActionHistoryRequest {
    public PostDescribeEnvironmentManagedActionHistoryQueryParams queryParams;
    public PostDescribeEnvironmentManagedActionHistoryRequest withQueryParams(PostDescribeEnvironmentManagedActionHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEnvironmentManagedActionHistoryHeaders headers;
    public PostDescribeEnvironmentManagedActionHistoryRequest withHeaders(PostDescribeEnvironmentManagedActionHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEnvironmentManagedActionHistoryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}