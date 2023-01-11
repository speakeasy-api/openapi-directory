package openapisdk.models.operations;



public class GetSatelliteRequest {
    public GetSatellitePathParams pathParams;
    public GetSatelliteRequest withPathParams(GetSatellitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSatelliteHeaders headers;
    public GetSatelliteRequest withHeaders(GetSatelliteHeaders headers) {
        this.headers = headers;
        return this;
    }
}