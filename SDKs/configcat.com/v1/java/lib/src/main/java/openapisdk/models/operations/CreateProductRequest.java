package openapisdk.models.operations;



public class CreateProductRequest {
    public CreateProductPathParams pathParams;
    public CreateProductRequest withPathParams(CreateProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProductRequests request;
    public CreateProductRequest withRequest(CreateProductRequests request) {
        this.request = request;
        return this;
    }
}