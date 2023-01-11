package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllowedNodeTypeUpdatesRequest {
    public ListAllowedNodeTypeUpdatesHeaders headers;
    public ListAllowedNodeTypeUpdatesRequest withHeaders(ListAllowedNodeTypeUpdatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAllowedNodeTypeUpdatesRequest request;
    public ListAllowedNodeTypeUpdatesRequest withRequest(openapisdk.models.shared.ListAllowedNodeTypeUpdatesRequest request) {
        this.request = request;
        return this;
    }
}