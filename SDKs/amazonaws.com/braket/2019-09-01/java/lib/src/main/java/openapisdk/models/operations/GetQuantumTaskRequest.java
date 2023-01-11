package openapisdk.models.operations;



public class GetQuantumTaskRequest {
    public GetQuantumTaskPathParams pathParams;
    public GetQuantumTaskRequest withPathParams(GetQuantumTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetQuantumTaskHeaders headers;
    public GetQuantumTaskRequest withHeaders(GetQuantumTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}