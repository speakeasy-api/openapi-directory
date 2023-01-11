package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelsRequest {
    public ListChannelsQueryParams queryParams;
    public ListChannelsRequest withQueryParams(ListChannelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChannelsHeaders headers;
    public ListChannelsRequest withHeaders(ListChannelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListChannelsRequestBody request;
    public ListChannelsRequest withRequest(ListChannelsRequestBody request) {
        this.request = request;
        return this;
    }
}