package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSyncExecutionRequest {
    public StartSyncExecutionHeaders headers;
    public StartSyncExecutionRequest withHeaders(StartSyncExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartSyncExecutionInput request;
    public StartSyncExecutionRequest withRequest(openapisdk.models.shared.StartSyncExecutionInput request) {
        this.request = request;
        return this;
    }
}