package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactRequest {
    public GetContactHeaders headers;
    public GetContactRequest withHeaders(GetContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContactRequest request;
    public GetContactRequest withRequest(openapisdk.models.shared.GetContactRequest request) {
        this.request = request;
        return this;
    }
}