package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocationsAddRequest {
    public LocationsAddQueryParams queryParams;
    public LocationsAddRequest withQueryParams(LocationsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LocationsAddHeaders headers;
    public LocationsAddRequest withHeaders(LocationsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInput request;
    public LocationsAddRequest withRequest(openapisdk.models.shared.LocationInput request) {
        this.request = request;
        return this;
    }
    public LocationsAddSecurity security;
    public LocationsAddRequest withSecurity(LocationsAddSecurity security) {
        this.security = security;
        return this;
    }
}