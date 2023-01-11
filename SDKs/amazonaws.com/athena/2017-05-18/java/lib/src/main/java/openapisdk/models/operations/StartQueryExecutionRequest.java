package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartQueryExecutionRequest {
    public StartQueryExecutionHeaders headers;
    public StartQueryExecutionRequest withHeaders(StartQueryExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartQueryExecutionInput request;
    public StartQueryExecutionRequest withRequest(openapisdk.models.shared.StartQueryExecutionInput request) {
        this.request = request;
        return this;
    }
}