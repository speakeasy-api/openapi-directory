package openapisdk.models.operations;



public class CarePlansListRequest {
    public CarePlansListQueryParams queryParams;
    public CarePlansListRequest withQueryParams(CarePlansListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CarePlansListSecurity security;
    public CarePlansListRequest withSecurity(CarePlansListSecurity security) {
        this.security = security;
        return this;
    }
}