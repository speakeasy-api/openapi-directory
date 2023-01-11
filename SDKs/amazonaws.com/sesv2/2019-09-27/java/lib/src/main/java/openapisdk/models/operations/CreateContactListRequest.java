package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactListRequest {
    public CreateContactListHeaders headers;
    public CreateContactListRequest withHeaders(CreateContactListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateContactListRequestBody request;
    public CreateContactListRequest withRequest(CreateContactListRequestBody request) {
        this.request = request;
        return this;
    }
}