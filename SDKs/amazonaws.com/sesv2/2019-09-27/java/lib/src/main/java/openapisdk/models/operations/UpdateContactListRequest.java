package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContactListRequest {
    public UpdateContactListPathParams pathParams;
    public UpdateContactListRequest withPathParams(UpdateContactListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateContactListHeaders headers;
    public UpdateContactListRequest withHeaders(UpdateContactListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateContactListRequestBody request;
    public UpdateContactListRequest withRequest(UpdateContactListRequestBody request) {
        this.request = request;
        return this;
    }
}