package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIpRoutesRequest {
    public ListIpRoutesHeaders headers;
    public ListIpRoutesRequest withHeaders(ListIpRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListIpRoutesRequest request;
    public ListIpRoutesRequest withRequest(openapisdk.models.shared.ListIpRoutesRequest request) {
        this.request = request;
        return this;
    }
}