package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocationsUpdateRequest {
    public LocationsUpdatePathParams pathParams;
    public LocationsUpdateRequest withPathParams(LocationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LocationsUpdateQueryParams queryParams;
    public LocationsUpdateRequest withQueryParams(LocationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LocationsUpdateHeaders headers;
    public LocationsUpdateRequest withHeaders(LocationsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInput request;
    public LocationsUpdateRequest withRequest(openapisdk.models.shared.LocationInput request) {
        this.request = request;
        return this;
    }
    public LocationsUpdateSecurity security;
    public LocationsUpdateRequest withSecurity(LocationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}