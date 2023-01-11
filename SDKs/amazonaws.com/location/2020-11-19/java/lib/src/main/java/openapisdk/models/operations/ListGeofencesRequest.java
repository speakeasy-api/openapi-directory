package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGeofencesRequest {
    public ListGeofencesPathParams pathParams;
    public ListGeofencesRequest withPathParams(ListGeofencesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListGeofencesQueryParams queryParams;
    public ListGeofencesRequest withQueryParams(ListGeofencesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGeofencesHeaders headers;
    public ListGeofencesRequest withHeaders(ListGeofencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListGeofencesRequestBody request;
    public ListGeofencesRequest withRequest(ListGeofencesRequestBody request) {
        this.request = request;
        return this;
    }
}