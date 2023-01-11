package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAllBackendsRequest {
    public RemoveAllBackendsPathParams pathParams;
    public RemoveAllBackendsRequest withPathParams(RemoveAllBackendsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAllBackendsHeaders headers;
    public RemoveAllBackendsRequest withHeaders(RemoveAllBackendsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveAllBackendsRequestBody request;
    public RemoveAllBackendsRequest withRequest(RemoveAllBackendsRequestBody request) {
        this.request = request;
        return this;
    }
}