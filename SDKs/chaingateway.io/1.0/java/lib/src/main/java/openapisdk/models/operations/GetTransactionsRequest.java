package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsRequest {
    public GetTransactionsHeaders headers;
    public GetTransactionsRequest withHeaders(GetTransactionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTransactionsRequest request;
    public GetTransactionsRequest withRequest(openapisdk.models.shared.GetTransactionsRequest request) {
        this.request = request;
        return this;
    }
}