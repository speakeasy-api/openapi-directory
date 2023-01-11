package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClusterJobsRequest {
    public ListClusterJobsHeaders headers;
    public ListClusterJobsRequest withHeaders(ListClusterJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListClusterJobsRequest request;
    public ListClusterJobsRequest withRequest(openapisdk.models.shared.ListClusterJobsRequest request) {
        this.request = request;
        return this;
    }
}