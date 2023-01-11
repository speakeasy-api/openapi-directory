package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTableVersionRequest {
    public GetTableVersionHeaders headers;
    public GetTableVersionRequest withHeaders(GetTableVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTableVersionRequest request;
    public GetTableVersionRequest withRequest(openapisdk.models.shared.GetTableVersionRequest request) {
        this.request = request;
        return this;
    }
}