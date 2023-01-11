package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributedGrantsRequest {
    public ListDistributedGrantsHeaders headers;
    public ListDistributedGrantsRequest withHeaders(ListDistributedGrantsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDistributedGrantsRequest request;
    public ListDistributedGrantsRequest withRequest(openapisdk.models.shared.ListDistributedGrantsRequest request) {
        this.request = request;
        return this;
    }
}