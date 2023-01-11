package openapisdk.models.operations;



public class GetEventSourceMappingRequest {
    public GetEventSourceMappingPathParams pathParams;
    public GetEventSourceMappingRequest withPathParams(GetEventSourceMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventSourceMappingHeaders headers;
    public GetEventSourceMappingRequest withHeaders(GetEventSourceMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
}