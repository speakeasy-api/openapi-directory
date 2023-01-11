package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptEulasRequest {
    public AcceptEulasPathParams pathParams;
    public AcceptEulasRequest withPathParams(AcceptEulasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AcceptEulasHeaders headers;
    public AcceptEulasRequest withHeaders(AcceptEulasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AcceptEulasRequestBody request;
    public AcceptEulasRequest withRequest(AcceptEulasRequestBody request) {
        this.request = request;
        return this;
    }
}