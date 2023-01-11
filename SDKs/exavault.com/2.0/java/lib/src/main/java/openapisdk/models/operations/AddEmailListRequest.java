package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddEmailListRequest {
    public AddEmailListHeaders headers;
    public AddEmailListRequest withHeaders(AddEmailListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddEmailListAddEmailListRequestBody request;
    public AddEmailListRequest withRequest(AddEmailListAddEmailListRequestBody request) {
        this.request = request;
        return this;
    }
}