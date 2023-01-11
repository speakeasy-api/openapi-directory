package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelColumnsRequest {
    public GetChannelColumnsPathParams pathParams;
    public GetChannelColumnsRequest withPathParams(GetChannelColumnsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChannelColumnsHeaders headers;
    public GetChannelColumnsRequest withHeaders(GetChannelColumnsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public GetChannelColumnsRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}