package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContactRequest {
    public UpdateContactPathParams pathParams;
    public UpdateContactRequest withPathParams(UpdateContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateContactHeaders headers;
    public UpdateContactRequest withHeaders(UpdateContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateContactRequestBody request;
    public UpdateContactRequest withRequest(UpdateContactRequestBody request) {
        this.request = request;
        return this;
    }
}