package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopQueryExecutionRequest {
    public StopQueryExecutionHeaders headers;
    public StopQueryExecutionRequest withHeaders(StopQueryExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopQueryExecutionInput request;
    public StopQueryExecutionRequest withRequest(openapisdk.models.shared.StopQueryExecutionInput request) {
        this.request = request;
        return this;
    }
}