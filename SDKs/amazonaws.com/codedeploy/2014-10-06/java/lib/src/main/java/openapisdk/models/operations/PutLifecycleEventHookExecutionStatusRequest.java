package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLifecycleEventHookExecutionStatusRequest {
    public PutLifecycleEventHookExecutionStatusHeaders headers;
    public PutLifecycleEventHookExecutionStatusRequest withHeaders(PutLifecycleEventHookExecutionStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutLifecycleEventHookExecutionStatusInput request;
    public PutLifecycleEventHookExecutionStatusRequest withRequest(openapisdk.models.shared.PutLifecycleEventHookExecutionStatusInput request) {
        this.request = request;
        return this;
    }
}