package openapisdk.models.operations;



public class CreateTagRequest {
    public CreateTagPathParams pathParams;
    public CreateTagRequest withPathParams(CreateTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateTagRequests request;
    public CreateTagRequest withRequest(CreateTagRequests request) {
        this.request = request;
        return this;
    }
}