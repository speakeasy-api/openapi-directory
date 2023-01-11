package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQuantumTaskRequest {
    public CreateQuantumTaskHeaders headers;
    public CreateQuantumTaskRequest withHeaders(CreateQuantumTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateQuantumTaskRequestBody request;
    public CreateQuantumTaskRequest withRequest(CreateQuantumTaskRequestBody request) {
        this.request = request;
        return this;
    }
}