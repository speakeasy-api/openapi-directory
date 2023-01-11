package openapisdk.models.operations;



public class LocationsOneRequest {
    public LocationsOnePathParams pathParams;
    public LocationsOneRequest withPathParams(LocationsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LocationsOneQueryParams queryParams;
    public LocationsOneRequest withQueryParams(LocationsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LocationsOneHeaders headers;
    public LocationsOneRequest withHeaders(LocationsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public LocationsOneSecurity security;
    public LocationsOneRequest withSecurity(LocationsOneSecurity security) {
        this.security = security;
        return this;
    }
}