package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIdRequest {
    public GetIdHeaders headers;
    public GetIdRequest withHeaders(GetIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIdInput request;
    public GetIdRequest withRequest(openapisdk.models.shared.GetIdInput request) {
        this.request = request;
        return this;
    }
}