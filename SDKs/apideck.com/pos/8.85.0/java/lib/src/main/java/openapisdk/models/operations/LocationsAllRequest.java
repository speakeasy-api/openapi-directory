package openapisdk.models.operations;



public class LocationsAllRequest {
    public LocationsAllQueryParams queryParams;
    public LocationsAllRequest withQueryParams(LocationsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LocationsAllHeaders headers;
    public LocationsAllRequest withHeaders(LocationsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public LocationsAllSecurity security;
    public LocationsAllRequest withSecurity(LocationsAllSecurity security) {
        this.security = security;
        return this;
    }
}