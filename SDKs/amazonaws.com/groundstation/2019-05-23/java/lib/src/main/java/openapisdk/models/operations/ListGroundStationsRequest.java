package openapisdk.models.operations;



public class ListGroundStationsRequest {
    public ListGroundStationsQueryParams queryParams;
    public ListGroundStationsRequest withQueryParams(ListGroundStationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGroundStationsHeaders headers;
    public ListGroundStationsRequest withHeaders(ListGroundStationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}