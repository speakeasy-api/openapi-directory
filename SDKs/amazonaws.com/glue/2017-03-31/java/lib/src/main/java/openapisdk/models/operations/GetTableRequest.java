package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTableRequest {
    public GetTableHeaders headers;
    public GetTableRequest withHeaders(GetTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTableRequest request;
    public GetTableRequest withRequest(openapisdk.models.shared.GetTableRequest request) {
        this.request = request;
        return this;
    }
}