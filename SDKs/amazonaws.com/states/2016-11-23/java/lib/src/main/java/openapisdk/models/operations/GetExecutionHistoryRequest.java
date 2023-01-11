package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExecutionHistoryRequest {
    public GetExecutionHistoryQueryParams queryParams;
    public GetExecutionHistoryRequest withQueryParams(GetExecutionHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetExecutionHistoryHeaders headers;
    public GetExecutionHistoryRequest withHeaders(GetExecutionHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetExecutionHistoryInput request;
    public GetExecutionHistoryRequest withRequest(openapisdk.models.shared.GetExecutionHistoryInput request) {
        this.request = request;
        return this;
    }
}