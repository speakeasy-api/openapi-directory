package openapisdk.models.operations;



public class DeleteApiMappingRequest {
    public DeleteApiMappingPathParams pathParams;
    public DeleteApiMappingRequest withPathParams(DeleteApiMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiMappingHeaders headers;
    public DeleteApiMappingRequest withHeaders(DeleteApiMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
}