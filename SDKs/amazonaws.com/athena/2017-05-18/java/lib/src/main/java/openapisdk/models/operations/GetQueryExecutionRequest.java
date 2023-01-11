package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryExecutionRequest {
    public GetQueryExecutionHeaders headers;
    public GetQueryExecutionRequest withHeaders(GetQueryExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetQueryExecutionInput request;
    public GetQueryExecutionRequest withRequest(openapisdk.models.shared.GetQueryExecutionInput request) {
        this.request = request;
        return this;
    }
}