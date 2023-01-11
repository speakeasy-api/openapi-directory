package openapisdk.models.operations;



public class ProductOrderRequest {
    public ProductOrderPathParams pathParams;
    public ProductOrderRequest withPathParams(ProductOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductOrderSecurity security;
    public ProductOrderRequest withSecurity(ProductOrderSecurity security) {
        this.security = security;
        return this;
    }
}