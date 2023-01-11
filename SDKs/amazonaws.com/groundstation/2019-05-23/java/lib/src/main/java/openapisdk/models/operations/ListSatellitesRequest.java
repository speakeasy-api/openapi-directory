package openapisdk.models.operations;



public class ListSatellitesRequest {
    public ListSatellitesQueryParams queryParams;
    public ListSatellitesRequest withQueryParams(ListSatellitesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSatellitesHeaders headers;
    public ListSatellitesRequest withHeaders(ListSatellitesHeaders headers) {
        this.headers = headers;
        return this;
    }
}