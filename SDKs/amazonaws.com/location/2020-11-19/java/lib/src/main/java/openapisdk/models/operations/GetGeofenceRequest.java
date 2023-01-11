package openapisdk.models.operations;



public class GetGeofenceRequest {
    public GetGeofencePathParams pathParams;
    public GetGeofenceRequest withPathParams(GetGeofencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGeofenceHeaders headers;
    public GetGeofenceRequest withHeaders(GetGeofenceHeaders headers) {
        this.headers = headers;
        return this;
    }
}