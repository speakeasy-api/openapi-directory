package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentManagedActionsRequest {
    public PostDescribeEnvironmentManagedActionsQueryParams queryParams;
    public PostDescribeEnvironmentManagedActionsRequest withQueryParams(PostDescribeEnvironmentManagedActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEnvironmentManagedActionsHeaders headers;
    public PostDescribeEnvironmentManagedActionsRequest withHeaders(PostDescribeEnvironmentManagedActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEnvironmentManagedActionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}