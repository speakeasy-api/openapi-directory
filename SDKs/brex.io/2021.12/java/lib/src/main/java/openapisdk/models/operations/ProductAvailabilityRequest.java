package openapisdk.models.operations;



public class ProductAvailabilityRequest {
    public ProductAvailabilityPathParams pathParams;
    public ProductAvailabilityRequest withPathParams(ProductAvailabilityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductAvailabilitySecurity security;
    public ProductAvailabilityRequest withSecurity(ProductAvailabilitySecurity security) {
        this.security = security;
        return this;
    }
}