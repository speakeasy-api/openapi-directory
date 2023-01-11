package openapisdk.models.operations;



public class CarePlansReadRequest {
    public CarePlansReadPathParams pathParams;
    public CarePlansReadRequest withPathParams(CarePlansReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CarePlansReadQueryParams queryParams;
    public CarePlansReadRequest withQueryParams(CarePlansReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CarePlansReadSecurity security;
    public CarePlansReadRequest withSecurity(CarePlansReadSecurity security) {
        this.security = security;
        return this;
    }
}