package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetaccesstokenIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetaccesstokenIdRequestBody request;
    public GetaccesstokenIdRequest withRequest(GetaccesstokenIdRequestBody request) {
        this.request = request;
        return this;
    }
}