package openapisdk.models.operations;



public class GetDedicatedIpRequest {
    public GetDedicatedIpPathParams pathParams;
    public GetDedicatedIpRequest withPathParams(GetDedicatedIpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDedicatedIpHeaders headers;
    public GetDedicatedIpRequest withHeaders(GetDedicatedIpHeaders headers) {
        this.headers = headers;
        return this;
    }
}