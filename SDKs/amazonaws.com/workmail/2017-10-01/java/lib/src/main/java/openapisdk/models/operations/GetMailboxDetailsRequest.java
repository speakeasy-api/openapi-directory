package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMailboxDetailsRequest {
    public GetMailboxDetailsHeaders headers;
    public GetMailboxDetailsRequest withHeaders(GetMailboxDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMailboxDetailsRequest request;
    public GetMailboxDetailsRequest withRequest(openapisdk.models.shared.GetMailboxDetailsRequest request) {
        this.request = request;
        return this;
    }
}