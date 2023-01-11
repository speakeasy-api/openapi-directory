package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContactChannelsRequest {
    public ListContactChannelsQueryParams queryParams;
    public ListContactChannelsRequest withQueryParams(ListContactChannelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContactChannelsHeaders headers;
    public ListContactChannelsRequest withHeaders(ListContactChannelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListContactChannelsRequest request;
    public ListContactChannelsRequest withRequest(openapisdk.models.shared.ListContactChannelsRequest request) {
        this.request = request;
        return this;
    }
}