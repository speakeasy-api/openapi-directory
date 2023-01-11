package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReplaysRequest {
    public ListReplaysHeaders headers;
    public ListReplaysRequest withHeaders(ListReplaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReplaysRequest request;
    public ListReplaysRequest withRequest(openapisdk.models.shared.ListReplaysRequest request) {
        this.request = request;
        return this;
    }
}