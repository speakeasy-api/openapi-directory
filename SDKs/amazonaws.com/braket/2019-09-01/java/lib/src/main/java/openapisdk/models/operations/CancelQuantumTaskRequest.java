package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelQuantumTaskRequest {
    public CancelQuantumTaskPathParams pathParams;
    public CancelQuantumTaskRequest withPathParams(CancelQuantumTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelQuantumTaskHeaders headers;
    public CancelQuantumTaskRequest withHeaders(CancelQuantumTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelQuantumTaskRequestBody request;
    public CancelQuantumTaskRequest withRequest(CancelQuantumTaskRequestBody request) {
        this.request = request;
        return this;
    }
}